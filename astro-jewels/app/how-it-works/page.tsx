import Button from '@/components/ui/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "How It Works | AstroJewels",
    description: "Learn how we craft your wedding jewellery based on Kundali, Rashi, and Nakshatra analysis.",
};

export default function HowItWorks() {
    const steps = [
        {
            title: "1. Submit Birth Details",
            description: "Provide the accurate Date, Time, and Place of Birth for both the Bride and Groom. This forms the foundation of our astrological analysis.",
            icon: "📅"
        },
        {
            title: "2. Astrology Analysis",
            description: "Our certified astrologers analyze the Kundalis to identify Rashis, Nakshatras, and any Doshas (like Mangal Dosha). We determine the most auspicious metals and gemstones for your union.",
            icon: "🔍"
        },
        {
            title: "3. Design Consultation",
            description: "Based on the astrological report, our design team sketches exclusive jewellery concepts. We blend sacred symbols with modern aesthetics.",
            icon: "✏️"
        },
        {
            title: "4. Handcrafted Creation",
            description: "Master artisans bring the design to life using ethically sourced gold and gemstones. Every piece is consecrated before delivery.",
            icon: "🔨"
        }
    ];

    return (
        <main className="section container">
            <h1 className="text-center" style={{ marginBottom: '3rem', color: 'var(--color-maroon)' }}>How It Works</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
                {steps.map((step, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'flex-start',
                        backgroundColor: 'var(--color-white)',
                        padding: '2rem',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{ fontSize: '3rem' }}>{step.icon}</div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-maroon)' }}>{step.title}</h2>
                            <p style={{ lineHeight: '1.6', color: 'var(--color-text-light)' }}>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '4rem' }}>
                <Button href="/consultation">Start Your Journey</Button>
            </div>
        </main>
    );
}
