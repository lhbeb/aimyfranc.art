'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselImages = [
    { src: '/images/SaphiraMain002.jpg', alt: 'SaphiraMain002' },
    { src: '/images/Norman.jpg', alt: 'Norman' },
    { src: '/images/SaphiraMain002-copy.jpg', alt: 'SaphiraMain002 copy' },
    { src: '/images/arrtt00copy-1428x2048.jpg', alt: 'arrtt00copy' },
    { src: '/images/CharlieHP.webp', alt: 'CharlieHP' },
    { src: '/images/SFS_6899_00_Edited-714x10241-kjjjj-1-1428x2048.jpg', alt: 'SFS_6899_00_Edited-714x10241 kjjjj' },
    { src: '/images/SFS_6927MAIN_001-1434x2048.jpg', alt: 'SFS_6927MAIN_001' },
    { src: '/images/SFS_6899_00_Edited-714x10241-kjjghgggjj-1-1428x2048.jpg', alt: 'SFS_6899_00_Edited-714x10241 kjjghgggjj' },
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 3) % carouselImages.length);
        }, 2000); // Changes every 2 seconds

        return () => clearInterval(interval);
    }, []);

    const getVisibleImages = () => {
        const images = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % carouselImages.length;
            images.push(carouselImages[index]);
        }
        return images;
    };

    return (
        <section className="flex items-center justify-center py-10" style={{ backgroundColor: '#562217', minHeight: '82.5vh' }}>
            <div className="w-full max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
                    {getVisibleImages().map((image, index) => (
                        <div
                            key={`${currentIndex}-${index}`}
                            className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-all duration-900 ease-in-out"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
