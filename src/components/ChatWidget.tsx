'use client';

import { useState, useRef, useEffect } from 'react';

type Message = {
    id: number;
    from: 'user' | 'bot';
    text: string;
    time: string;
};

const BOT_REPLIES = [
    "Thanks for reaching out! I'll get back to you as soon as possible. 🎨",
    "Message received! Aimy will respond shortly.",
    "Got it! Expect a reply soon. In the meantime, feel free to browse the gallery!",
    "Thank you for your message! I'll be in touch soon. ✨",
];

function getTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            from: 'bot',
            text: "Hi there! 👋 Welcome to Aimy Sidney Franco's studio. How can I help you today?",
            time: getTime(),
        },
    ]);
    const [sending, setSending] = useState(false);
    const [nameSet, setNameSet] = useState(false);
    const [unread, setUnread] = useState(0);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open) {
            setUnread(0);
            setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
        }
    }, [open, messages]);

    const handleNameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;
        setNameSet(true);
        setMessages(prev => [
            ...prev,
            {
                id: Date.now(),
                from: 'bot',
                text: `Nice to meet you, ${name.trim()}! 😊 What can I help you with?`,
                time: getTime(),
            },
        ]);
    };

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || sending) return;

        const userMsg: Message = {
            id: Date.now(),
            from: 'user',
            text: input.trim(),
            time: getTime(),
        };

        setMessages(prev => [...prev, userMsg]);
        const sentText = input.trim();
        setInput('');
        setSending(true);

        try {
            await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name || 'Anonymous', message: sentText }),
            });
        } catch {
            // silently fail — user still sees their message
        }

        // Auto-reply after a short delay
        setTimeout(() => {
            const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)];
            setMessages(prev => [
                ...prev,
                { id: Date.now() + 1, from: 'bot', text: reply, time: getTime() },
            ]);
            setSending(false);
            if (!open) setUnread(u => u + 1);
        }, 1200);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            {/* Chat Window */}
            {open && (
                <div
                    className="w-[420px] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    style={{ height: '580px', background: '#fff', border: '1px solid #e5e7eb' }}
                >
                    {/* Header */}
                    <div
                        className="flex items-center gap-3 px-4 py-3"
                        style={{ background: '#50261A' }}
                    >
                        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
                            🎨
                        </div>
                        <div className="flex-1">
                            <p className="text-white font-semibold text-sm leading-tight">Aimy Sidney Franco</p>
                            <p className="text-white/70 text-xs">Studio Chat · Usually replies fast</p>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-white/70 hover:text-white transition-colors p-1"
                            aria-label="Close chat"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ background: '#f9f5f4' }}>
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${msg.from === 'user'
                                        ? 'text-white rounded-br-sm'
                                        : 'text-gray-800 rounded-bl-sm'
                                        }`}
                                    style={{
                                        background: msg.from === 'user' ? '#50261A' : '#fff',
                                        boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                                    }}
                                >
                                    <p>{msg.text}</p>
                                    <p className={`text-[10px] mt-1 ${msg.from === 'user' ? 'text-white/60 text-right' : 'text-gray-400'}`}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {sending && (
                            <div className="flex justify-start">
                                <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-sm shadow-sm">
                                    <div className="flex gap-1 items-center h-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={bottomRef} />
                    </div>

                    {/* Name prompt or message input */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-white">
                        {!nameSet ? (
                            <form onSubmit={handleNameSubmit} className="flex gap-2">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    placeholder="Your name to start..."
                                    className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-200 outline-none focus:border-[#50261A] transition-colors"
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    disabled={!name.trim()}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-40"
                                    style={{ background: '#50261A' }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleSend} className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 text-sm px-3 py-2 rounded-full border border-gray-200 outline-none focus:border-[#50261A] transition-colors"
                                    disabled={sending}
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || sending}
                                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all disabled:opacity-40"
                                    style={{ background: '#50261A' }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setOpen(o => !o)}
                className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
                style={{ background: '#50261A' }}
                aria-label="Toggle chat"
            >
                {open ? (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                    </svg>
                )}
                {!open && unread > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                        {unread}
                    </span>
                )}
            </button>
        </div>
    );
}
