import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './RashiCard.module.css';

interface RashiCardProps {
    rashi: string;
    symbol: string;
    gemstone: string;
    imageUrl: string;
}

export default function RashiCard({ rashi, symbol, gemstone, imageUrl }: RashiCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>{symbol}</div>
            <h3 className={styles.rashiName}>{rashi}</h3>

            <div className={styles.imageContainer}>
                <Image
                    src={imageUrl}
                    alt={`${gemstone} for ${rashi}`}
                    width={200}
                    height={200}
                    className={styles.image}
                />
            </div>

            <div>
                <span className={styles.gemName}>{gemstone}</span>
                <p className={styles.recommendation}>Recommended as per Vedic Astrology</p>
            </div>

            <Button href="/consultation" variant="outline" className="text-sm">
                Consult for This Rashi
            </Button>
        </div>
    );
}
