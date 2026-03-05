'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
    const pathname = usePathname();

    useEffect(() => {
        // Fire and forget — no UI impact
        fetch('/api/visit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                page: pathname,
                userAgent: navigator.userAgent,
                fullUrl: window.location.href,
            }),
        }).catch(() => { });
    }, [pathname]);

    return null;
}
