import Link from 'next/link';
import Image from 'next/image';
import { Star, Gem, ScrollText, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import styles from './home.module.css';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Jewellery Designed by Destiny ✨</h1>
          <p className={styles.heroSubtitle}>
            Kundali-based wedding jewellery crafted for prosperity, harmony & love.
          </p>
          <div className={styles.heroButtons}>
            <Button href="/consultation" variant="primary">
              Get Jewellery as per Kundali
            </Button>
            <Button href="/consultation" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Book Astrology Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works - Snapshop */}
      <section className="section container">
        <h2 className={styles.sectionTitle}>Aligned with the Stars</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <ScrollText size={40} className={styles.stepIcon} />
            <h3 className={styles.stepTitle}>1. Share Birth Details</h3>
            <p>We analyze the Bride & Groom's Kundali to identify lucky stones and favorable metals.</p>
          </div>
          <div className={styles.stepCard}>
            <Star size={40} className={styles.stepIcon} />
            <h3 className={styles.stepTitle}>2. Astrology Analysis</h3>
            <p>Our experts check for Mangal Dosha, Nakshatra compatibility, and Rashi benefits.</p>
          </div>
          <div className={styles.stepCard}>
            <Gem size={40} className={styles.stepIcon} />
            <h3 className={styles.stepTitle}>3. Custom Crafting</h3>
            <p>Master artisans create your bespoke jewellery infused with cosmic energy.</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Astrology Jewellery?</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.5rem', borderRadius: '8px', minWidth: '300px' }}>
              <CheckCircle color="var(--color-gold)" />
              <div>
                <h4 style={{ color: 'var(--color-maroon)' }}>Dosha Shanti</h4>
                <p style={{ fontSize: '0.9rem' }}>Neutralize negative planetary influences.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.5rem', borderRadius: '8px', minWidth: '300px' }}>
              <CheckCircle color="var(--color-gold)" />
              <div>
                <h4 style={{ color: 'var(--color-maroon)' }}>Prosperity & Wealth</h4>
                <p style={{ fontSize: '0.9rem' }}>Attract abundance in your new life.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.5rem', borderRadius: '8px', minWidth: '300px' }}>
              <CheckCircle color="var(--color-gold)" />
              <div>
                <h4 style={{ color: 'var(--color-maroon)' }}>Marital Harmony</h4>
                <p style={{ fontSize: '0.9rem' }}>Strengthen the bond of love.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section container">
        <h2 className={styles.sectionTitle}>Blessed Unions</h2>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "We were worried about Mangal Dosha in our Kundalis. The team at AstroJewels designed a beautiful coral ring set that not only looked stunning but gave us peace of mind. Our wedding was perfect!"
          </p>
          <p className={styles.author}>- Priya & Rahul, Mumbai</p>
          <div style={{ color: 'var(--color-gold)', marginTop: '0.5rem' }}>★★★★★</div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section" style={{ backgroundColor: 'var(--color-maroon)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h3>Certified Astrologers</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Verified by experts</p>
          </div>
          <div>
            <h3>Authentic Gemstones</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Govt. Lab Certified</p>
          </div>
          <div>
            <h3>Made in India</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Handcrafted Heritage</p>
          </div>
        </div>
      </section>
    </main>
  );
}
