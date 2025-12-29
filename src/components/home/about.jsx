"use client";

import { useState } from 'react';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="about-wrapper">
      <div className="container">
        <div className="about-bg">
          <div className="about-content">
            <h2>Amar Correa Associates, Juris</h2>

            <p>
              <span style={{ color: '#4B4F58' }}>
                <span style={{ fontFamily: "'Be Vietnam', sans-serif", fontWeight: 593}}>ACA</span>
                <span style={{ fontWeight: 400 }}>Juris</span>
                <span style={{ fontWeight: 300 }}>,</span>
              </span> is a Bangalore-based multidisciplinary law firm with 
a core focus on criminal law. Established in 2002, the firm brings over 25 years of dedicated 
experience in advising and representing individual and corporate clients across all stages of 
criminal litigation—from Magistrate and Sessions Courts to the High Court. <span style={{ color: '#4B4F58' }}><span style={{ fontFamily: "'Be Vietnam', sans-serif", fontWeight: 593 }}>ACA</span><span style={{ fontWeight: 400 }}>Juris</span></span> offers strategic legal counsel and courtroom representation grounded in practical 
insight. The Firm engages with a wide range of matters, including offences under the Indian 
Penal Code, prosecutions under the Companies Act, infringement of copyright and trademark 
laws, workplace sexual harassment, cheque dishonour under the Negotiable Instruments Act, 
defamation-related litigation and criminal prosecution, extradition proceedings, legal issues 
concerning foreign nationals, cybercrime and digital offences, investigations and prosecutions by 
the Enforcement Directorate, and cases under the Narcotic Drugs and Psychotropic Substances 
Act.
              {isExpanded && (
                <>
                  <br /><br />
                  The firm’s approach to each client’s cause is a reflection of its experience in criminal law—built 
over years of focused practice, not drawn from general legal theory and academic concepts—
resulting in clarity, diligence, and focus in navigating legal issues. 
                </>
              )}
            </p>

            {!isExpanded && (
              <button
                className="about-readmore"
                onClick={() => setIsExpanded(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                Read More...
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
