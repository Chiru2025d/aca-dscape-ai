import Image from 'next/image';
import Header from '../header.jsx';

export default function UnderDevelopment() {
    return (
        <>
            <Header />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 100px)', // Adjust for header height
                backgroundColor: '#F4F2EE',
                padding: '20px'
            }}>
                <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: 'auto', aspectRatio: '16/9' }}>
                    <Image
                        src="/images/page_under_devlopment@2x.webp"
                        alt="Page Under Development"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                        srcSet="/images/page_under_devlopment@2x.webp 2x, /images/page_under_devlopment@3x.webp 3x"
                    />
                </div>
            </div>
        </>
    );
}
