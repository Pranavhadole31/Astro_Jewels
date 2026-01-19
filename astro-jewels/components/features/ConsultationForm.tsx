'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function ConsultationForm() {
    const [formData, setFormData] = useState({
        brideName: '',
        groomName: '',
        dob: '',
        tob: '',
        pob: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Our astrologers will contact you shortly.');
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
        fontFamily: 'var(--font-sans)'
    };

    return (
        <form onSubmit={handleSubmit} style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <h3 className="text-center" style={{ marginBottom: '1.5rem', color: 'var(--color-maroon)' }}>Enter Birth Details</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Bride's Name *</label>
                    <input
                        type="text"
                        name="brideName"
                        required
                        style={inputStyle}
                        value={formData.brideName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Groom's Name *</label>
                    <input
                        type="text"
                        name="groomName"
                        required
                        style={inputStyle}
                        value={formData.groomName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Date of Birth *</label>
                    <input
                        type="date"
                        name="dob"
                        required
                        style={inputStyle}
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Time of Birth *</label>
                    <input
                        type="time"
                        name="tob"
                        required
                        style={inputStyle}
                        value={formData.tob}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Place of Birth *</label>
                    <input
                        type="text"
                        name="pob"
                        required
                        style={inputStyle}
                        placeholder="City, Country"
                        value={formData.pob}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Phone / WhatsApp *</label>
                <input
                    type="tel"
                    name="phone"
                    required
                    style={inputStyle}
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message (Optional)</label>
                <textarea
                    name="message"
                    rows={4}
                    style={inputStyle}
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" fullWidth>Get My Jewellery Design</Button>
        </form>
    );
}
