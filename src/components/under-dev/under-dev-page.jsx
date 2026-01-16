"use client";

import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import styles from "../components/under-dev/under-development.module.css";

export default function UnderDevelopment() {
  return (
    <>
      <Header />
      
      <section className={styles.underDevSection}>
        <div className={styles.underDevContainer}>
          <svg 
            className={styles.underDevIllustration}
            viewBox="0 0 1200 600" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sky Background */}
            <rect width="1200" height="600" fill="#F5F3F0"/>
            
            {/* Clouds */}
            <ellipse cx="380" cy="100" rx="70" ry="40" fill="#D4D4D4" opacity="0.6"/>
            <ellipse cx="420" cy="95" rx="50" ry="35" fill="#D4D4D4" opacity="0.6"/>
            <ellipse cx="800" cy="140" rx="80" ry="45" fill="#D4D4D4" opacity="0.6"/>
            <ellipse cx="850" cy="135" rx="60" ry="35" fill="#D4D4D4" opacity="0.6"/>
            
            {/* Building/Construction Site */}
            {/* Main browser window frame */}
            <rect x="400" y="150" width="400" height="320" fill="#FAFAFA" stroke="#8B8B8B" strokeWidth="8" rx="15"/>
            
            {/* Browser tab bar */}
            <rect x="400" y="150" width="400" height="40" fill="#556B7F" rx="15"/>
            <circle cx="420" cy="170" r="4" fill="#FFFFFF" opacity="0.5"/>
            <circle cx="435" cy="170" r="4" fill="#FFFFFF" opacity="0.5"/>
            <circle cx="450" cy="170" r="4" fill="#FFFFFF" opacity="0.5"/>
            <rect x="470" y="162" width="280" height="16" fill="#FFFFFF" opacity="0.3" rx="3"/>
            
            {/* Content placeholders in browser */}
            <rect x="430" y="210" width="100" height="60" fill="#6B7A9C" opacity="0.7" rx="4"/>
            <rect x="550" y="200" width="120" height="80" fill="#6B7A9C" opacity="0.6" rx="4"/>
            <line x1="430" y1="290" x2="550" y2="290" stroke="#5B7A9C" strokeWidth="4" opacity="0.5"/>
            <line x1="560" y1="290" x2="670" y2="290" stroke="#5B7A9C" strokeWidth="4" opacity="0.5"/>
            
            {/* Construction crane */}
            <g>
              {/* Crane tower */}
              <rect x="850" y="100" width="20" height="280" fill="#999999"/>
              {/* Crane arm */}
              <line x1="860" y1="110" x2="980" y2="80" stroke="#999999" strokeWidth="12"/>
              {/* Crane hook */}
              <circle cx="980" cy="100" r="8" fill="#FF9500"/>
              <path d="M 985 108 Q 990 120 985 130" stroke="#FF9500" strokeWidth="4" fill="none"/>
            </g>
            
            {/* Construction barriers */}
            <g>
              {/* Left barrier */}
              <rect x="320" y="340" width="60" height="40" fill="#FF9500"/>
              <rect x="330" y="330" width="40" height="15" fill="#333333"/>
              
              {/* Right barrier */}
              <rect x="820" y="340" width="60" height="40" fill="#FF9500"/>
              <rect x="830" y="330" width="40" height="15" fill="#333333"/>
            </g>
            
            {/* Safety cone */}
            <g>
              <polygon points="480,420 460,450 500,450" fill="#FF9500"/>
              <polygon points="485,425 470,448 500,448" fill="#FFFFFF"/>
            </g>
            
            {/* Ground line */}
            <line x1="200" y1="450" x2="1000" y2="450" stroke="#333333" strokeWidth="3"/>
          </svg>
          
          <h1 className={styles.underDevTitle}>
            🚧 Page is in Under Development 🚧
          </h1>
          
          <p className={styles.underDevMessage}>
            We're working hard to bring you this page soon. Please check back later!
          </p>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
