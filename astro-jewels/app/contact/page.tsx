import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <main className="section container">
            <h1 className="text-center" style={{ color: 'var(--color-maroon)', marginBottom: '3rem' }}>Contact Us</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Contact Info */}
                <div>
                    <h2 style={{ marginBottom: '2rem', color: 'var(--color-gold)' }}>Get in Touch</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <MapPin className="text-gold" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Visit Our Boutique</h4>
                                <p>Shivdatta Gemstones & Jewellery</p>
                                <p>Saraf Bazar, Kopargaon,<br />Dist – Ahilyanagar, Maharashtra, India</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Phone className="text-gold" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Call / WhatsApp</h4>
                                <p>+91 8446316155</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Mail className="text-gold" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Email</h4>
                                <p>nikumbhradhey045@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Clock className="text-gold" />
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Opening Hours</h4>
                                <p>Mon - Sat: 10:00 AM - 9:00 PM</p>
                                <p>Sun: By Appointment Only</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="text-center margin-top-lg" style={{ marginTop: '4rem' }}>
                <p style={{ marginBottom: '1rem' }}>Have a quick query?</p>
                <Button href="https://wa.me/918446316155" variant="secondary">Chat on WhatsApp</Button>
            </div>
        </main>
    );
}
