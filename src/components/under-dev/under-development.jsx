import Header from '../header.jsx';

export default function UnderDevelopment() {
    return (
        <div style={{ 
            backgroundColor: '#E8E5DE', 
            minHeight: '100vh',
            margin: '-100px 0 0 0',
            padding: 0,
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                padding: '40px 20px'
            }}>
                <div style={{ 
                    width: '100%', 
                    maxWidth: '1200px', 
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
