import Link from 'next/link';
import { Sparkles, Instagram, Facebook, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-gold)' }}>
                            <Sparkles size={24} />
                            <span>Shivdatta Gemstones</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Astrology-Based Wedding Jewellery | Kundali | Rashi | Nakshatra.
                            Crafting destiny-driven designs for prosperity, harmony, and love.
                        </p>
                    </div>

                    <div>
                        <h4 className={styles.heading}>Quick Links</h4>
                        <nav className={styles.links}>
                            <Link href="/">Home</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/how-it-works">How It Works</Link>
                            <Link href="/contact">Contact</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className={styles.heading}>Collections</h4>
                        <nav className={styles.links}>
                            <Link href="/collections">Mangal Dosha Shanti</Link>
                            <Link href="/collections">Nakshatra Based</Link>
                            <Link href="/collections">Rashi Based</Link>
                            <Link href="/collections">Lagna Shanti</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className={styles.heading}>Contact</h4>
                        <div className={styles.links}>
                            <a href="mailto:nikumbhradhey045@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={16} /> nikumbhradhey045@gmail.com
                            </a>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                                <p>+91 8446316155</p>
                                <p>Saraf Bazar, Kopargaon,<br />Dist – Ahilyanagar,<br />Maharashtra, India</p>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <a href="https://www.instagram.com/s_s_d_manufacturing_unit_1992?igsh=eGs1ODdiYXl1dDEw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIcon}><Instagram size={20} /></a>
                                <a href="#" aria-label="Facebook" className={styles.socialIcon}><Facebook size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Shivdatta Gemstones & Jewellery. All rights reserved. | Handcrafted in India 🇮🇳</p>
                </div>
            </div>
        </footer>
    );
}
