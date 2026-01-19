import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import RashiCard from '@/components/features/RashiCard';

const collections = [
    {
        id: 'mangal',
        title: "Mangal Dosha Shanti",
        description: "Coral and Gold jewellery designed to pacify Mars and ensure a peaceful marriage.",
        color: "#FF6B6B"
    },
    {
        id: 'nakshatra',
        title: "Nakshatra Collections",
        description: "Designs inspired by the birth stars of the couple, enhancing compatibility.",
        color: "#4ECDC4"
    },
    {
        id: 'rashi',
        title: "Rashi-Based Jewellery",
        description: "Zodiac-specific designs that align with your sun and moon signs.",
        color: "#FFE66D"
    },
    {
        id: 'lagna',
        title: "Lagna Shanti",
        description: "Specific gemstones to strengthen the Ascendant house for health and longevity.",
        color: "#1A535C"
    }
];

export const metadata: Metadata = {
    title: "Collections | AstroJewels",
    description: "Browse our astrology-based jewellery collections: Mangal Dosha, Nakshatra, Rashi, and more.",
};

export default function Collections() {
    return (
        <main className="section container">
            <h1 className="text-center" style={{ marginBottom: '1rem', color: 'var(--color-maroon)' }}>Astrology Jewellery Collections</h1>
            <p className="text-center" style={{ marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Explore our specialized collections crafted to resonate with your cosmic blueprint.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '6rem'
            }}>
                {collections.map((item) => (
                    <div key={item.id} style={{
                        border: '1px solid var(--color-gold)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        backgroundColor: 'var(--color-white)',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ height: '200px', backgroundColor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                            {/* Placeholder for actual image */}
                            Image: {item.title}
                        </div>
                        <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-maroon)' }}>{item.title}</h3>
                            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-light)', flexGrow: 1 }}>{item.description}</p>
                            <Button href="/consultation" variant="outline" fullWidth>View Details</Button>
                        </div>
                    </div>
                ))}
            </div>

            <RashiCollection />
        </main>
    );
}

function RashiCollection() {
    const rashiData = [
        { rashi: "मेष (Aries)", symbol: "♈", gemstone: "Red Coral", image: "/images/rashi/mesh.jpg" },
        { rashi: "वृषभ (Taurus)", symbol: "♉", gemstone: "Diamond", image: "/images/rashi/vrushabh.jpg" },
        { rashi: "मिथुन (Gemini)", symbol: "♊", gemstone: "Emerald", image: "/images/rashi/mithun.jpg" },
        { rashi: "कर्क (Cancer)", symbol: "♋", gemstone: "Pearl", image: "/images/rashi/kark.jpg" },
        { rashi: "सिंह (Leo)", symbol: "♌", gemstone: "Ruby", image: "/images/rashi/sinh.jpg" },
        { rashi: "कन्या (Virgo)", symbol: "♍", gemstone: "Emerald", image: "/images/rashi/kanya.jpg" },
        { rashi: "तुळ (Libra)", symbol: "♎", gemstone: "Diamond", image: "/images/rashi/tul.jpg" },
        { rashi: "वृश्चिक (Scorpio)", symbol: "♏", gemstone: "Red Coral", image: "/images/rashi/vrushchik.jpg" },
        { rashi: "धनु (Sagittarius)", symbol: "♐", gemstone: "Yellow Sapphire", image: "/images/rashi/dhanu.jpg" },
        { rashi: "मकर (Capricorn)", symbol: "♑", gemstone: "Blue Sapphire", image: "/images/rashi/makar.webp" },
        { rashi: "कुंभ (Aquarius)", symbol: "♒", gemstone: "Blue Sapphire", image: "/images/rashi/kumbh.jpg" },
        { rashi: "मीन (Pisces)", symbol: "♓", gemstone: "Yellow Sapphire", image: "/images/rashi/meen.jpg" }
    ];

    return (
        <section>
            <h2 className="text-center sectionTitle" style={{ marginBottom: '1rem', color: 'var(--color-maroon)', fontSize: '2rem' }}>Rashi Wise Gemstone Collection</h2>
            <p className="text-center" style={{ marginBottom: '3rem', color: 'var(--color-text-light)', maxWidth: '700px', margin: '0 auto 3rem' }}>
                Premium astrology-based gemstones carefully selected as per each Rashi.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                {rashiData.map((data, index) => (
                    <RashiCard
                        key={index}
                        rashi={data.rashi}
                        symbol={data.symbol}
                        gemstone={data.gemstone}
                        imageUrl={data.image}
                    />
                ))}
            </div>

            <p className="text-center" style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                Gemstones shown are for sample purpose only. Final gemstone recommendation is done after kundali analysis.
            </p>
        </section>
    );
}
