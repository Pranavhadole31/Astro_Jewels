export default function AboutPage() {
    return (
        <main className="section container">
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="text-center" style={{ color: 'var(--color-maroon)', marginBottom: '2rem' }}>Our Story</h1>

                <div style={{ marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-light)' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Welcome to <strong>Shivdatta Gemstones & Jewellery</strong>, where the ancient wisdom of Vedic Astrology meets the timeless elegance of fine craftsmanship. Located in the heart of Saraf Bazar, Kopargaon, we are pioneers in creating jewellery that is not just an ornament, but a cosmic tool for prosperity and happiness.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Our specialization lies in <strong>Kundali-based Wedding Jewellery</strong>. We understand that every individual is born under a unique celestial arrangement. Our mission is to harness the positive energies of your planets (Grahas) and Nakshatras through carefully selected gemstones and auspicious metals.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Whether it is <em>Mangal Dosha Shanti</em>, strengthening a weak <em>Lagna</em>, or choosing the perfect <em>Lucky Stone</em> for your new life journey, our certified astrologers and master goldsmiths work in harmony to craft pieces that resonate with your soul.
                    </p>
                    <p>
                        At Shivdatta Gemstones, we believe that a marriage is a union of stars. Let us help you align them for a lifetime of love and abundance.
                    </p>
                </div>

                <div style={{ padding: '3rem', backgroundColor: 'var(--color-maroon)', color: 'var(--color-ivory)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-gold)', marginBottom: '1rem' }}>Our Vision</h2>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                        "To be the guardian of marital bliss for every Indian couple through the power of sacred gems and metals."
                    </p>
                </div>
            </div>
        </main>
    );
}
