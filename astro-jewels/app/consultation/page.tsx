import ConsultationForm from '@/components/features/ConsultationForm';

export default function ConsultationPage() {
    return (
        <main className="section container">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ color: 'var(--color-maroon)', marginBottom: '1rem' }}>Book Your Astrology Consultation</h1>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                    Unlock the secrets of your stars. Fill in the details below to receive a personalized wedding jewellery recommendation report.
                </p>
            </div>
            <ConsultationForm />
        </main>
    );
}
