import Link from 'next/link';
import { Sparkles, Menu } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Sparkles color="var(--color-gold)" size={24} />
                    <span>Shivdatta Gemstones</span>
                </Link>

                <nav className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/how-it-works" className={styles.link}>How It Works</Link>
                    <Link href="/collections" className={styles.link}>Collections</Link>
                    <Link href="/about" className={styles.link}>Our Story</Link>
                    <Link href="/contact" className={styles.link}>Contact</Link>
                </nav>

                <div className={styles.actions}>
                    <Button href="/consultation" variant="primary">
                        Book Consultation
                    </Button>
                </div>

                <button className={styles.mobileMenuBtn} aria-label="Menu">
                    <Menu />
                </button>
            </div>
        </header>
    );
}
