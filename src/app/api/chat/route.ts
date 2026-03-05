import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8103676783:AAGnnUDAZjYqVUtoaSyuTgdGReWWdVH_yrg';
const TELEGRAM_CHAT_ID = '-1002806502052';

export async function POST(req: NextRequest) {
    try {
        const { name, message } = await req.json();

        if (!message?.trim()) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        const timestamp = new Date().toLocaleString('en-US', { timeZone: 'UTC', dateStyle: 'medium', timeStyle: 'short' });

        const text = `💬 *New Website Chat Message*\n\n👤 *From:* ${name || 'Anonymous'}\n🕐 *Time:* ${timestamp} UTC\n\n📝 *Message:*\n${message}`;

        const telegramRes = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: 'Markdown',
                }),
            }
        );

        if (!telegramRes.ok) {
            const err = await telegramRes.json();
            console.error('Telegram error:', err);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Chat API error:', err);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
