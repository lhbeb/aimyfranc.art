import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8103676783:AAGnnUDAZjYqVUtoaSyuTgdGReWWdVH_yrg';
const TELEGRAM_CHAT_ID = '-1002806502052';

// Map country code to flag emoji
function countryFlag(code: string): string {
    if (!code || code.length !== 2) return '🌐';
    return code
        .toUpperCase()
        .split('')
        .map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65))
        .join('');
}

// Rough device detection from User-Agent
function parseDevice(ua: string): string {
    if (!ua) return 'Unknown Device';
    if (/iPhone/i.test(ua)) return '📱 iPhone';
    if (/iPad/i.test(ua)) return '📱 iPad';
    if (/Android.*Mobile/i.test(ua)) return '📱 Android Phone';
    if (/Android/i.test(ua)) return '📱 Android Tablet';
    if (/Windows/i.test(ua)) return '🖥️ Windows PC';
    if (/Macintosh/i.test(ua)) return '🖥️ Mac';
    if (/Linux/i.test(ua)) return '🖥️ Linux';
    return '🖥️ Desktop';
}

// Parse browser from User-Agent
function parseBrowser(ua: string): string {
    if (!ua) return 'Unknown';
    if (/Edg\//i.test(ua)) return 'Edge';
    if (/Chrome/i.test(ua) && !/Chromium/i.test(ua)) return 'Chrome';
    if (/Firefox/i.test(ua)) return 'Firefox';
    if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) return 'Safari';
    if (/OPR|Opera/i.test(ua)) return 'Opera';
    return 'Unknown';
}

export async function POST(req: NextRequest) {
    try {
        const { page, userAgent, fullUrl } = await req.json();

        // Get IP from headers (works behind proxies/Vercel)
        const forwarded = req.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0].trim() : req.headers.get('x-real-ip') || 'Unknown';

        // Skip localhost
        if (ip === '::1' || ip === '127.0.0.1' || ip === 'Unknown') {
            return NextResponse.json({ skipped: true });
        }

        // Geolocate IP using free api
        let country = 'Unknown';
        let countryCode = '';
        let city = '';
        try {
            const geoRes = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode,city`);
            if (geoRes.ok) {
                const geo = await geoRes.json();
                if (geo.status === 'success') {
                    country = geo.country || 'Unknown';
                    countryCode = geo.countryCode || '';
                    city = geo.city || '';
                }
            }
        } catch {
            // geo lookup failed, continue without it
        }

        const flag = countryFlag(countryCode);
        const device = parseDevice(userAgent || '');
        const browser = parseBrowser(userAgent || '');
        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' });
        const location = city ? `${city}, ${country}` : country;

        const text = `👀 *New Visitor on Your Website!*

🔗 *URL:* ${fullUrl || page || '/'}
${flag} *Location:* ${location}
🌐 *IP Address:* \`${ip}\`
${device} | 🌍 ${browser}
🕐 *Time:* ${timestamp} UTC

_Someone just discovered your art! 🎨_`;

        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
                parse_mode: 'Markdown',
            }),
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Visit tracker error:', err);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
