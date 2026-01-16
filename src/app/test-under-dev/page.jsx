import Header from '../../components/header.jsx';

export default function TestUnderDevPage() {
    return (
        <div style={{ 
            backgroundColor: '#F4F2EE', 
            minHeight: '100vh',
            margin: '-100px 0 0 0',
            padding: 0
        }}>
            <Header />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 100px)',
                padding: '40px 20px'
            }}>
                <div style={{ 
                    width: '100%', 
                    maxWidth: '800px', 
                    textAlign: 'center'
                }}>
                    <img
                        src="/images/Under Development.png"
                        alt="Page Under Development"
                        style={{ 
                            width: '100%', 
                            height: 'auto',
                            maxWidth: '100%',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
