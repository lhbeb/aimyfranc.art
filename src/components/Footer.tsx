import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#ededed]">

            {/* Primary Footer */}
            <div className="py-8 md:py-12">
                <div className="container-custom text-center">
                    <p className="text-sm md:text-base">
                        Copyright © 2026{' '}
                        <Link href="/" className="hover:text-[#ad1c14]">
                            Aimy Sidney Franco
                        </Link>
                        {' '}- Timeless Portraits For Cherished Memories
                    </p>
                </div>
            </div>
        </footer>
    );
}
