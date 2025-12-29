"use client";

import { useEffect, useRef } from 'react';
import Image from "next/image";

export default function Founder() {
    const sectionRef = useRef(null);
    const bioRef = useRef(null);
    // useEffect(() => {
    //     const section = sectionRef.current;
    //     const bio = bioRef.current;
    //     if (!section || !bio) return;

    //     const handleWheel = (e) => {
    //         // Check if section is approximately in view (basic check)
    //         const rect = section.getBoundingClientRect();
    //         const isInView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;

    //         if (!isInView) return;

    //         const { scrollTop, scrollHeight, clientHeight } = bio;
    //         const delta = e.deltaY;
    //         const isScrollingDown = delta > 0;
    //         const isScrollingUp = delta < 0;

    //         const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;
    //         const isAtTop = scrollTop <= 0;

    //         if ((isScrollingDown && !isAtBottom) || (isScrollingUp && !isAtTop)) {
    //             e.preventDefault();
    //             bio.scrollTop += delta;
    //         }
    //     };

    //     window.addEventListener('wheel', handleWheel, { passive: false });

    //     return () => {
    //         window.removeEventListener('wheel', handleWheel);
    //     };
    // }, []);

    return (
        <section className="founder-section">
            <div className="container">
                <div className="founder-inner">
                    <div className="founder-text">
                        <span className="founder-label">Head Associate</span>
                        <h2 className="founder-name">Amar Correa</h2>
                        <span className="founder-role">Amar Correa, heads ACA Juris.</span>

                        <div className="founder-bio-container">
                            <p className="founder-bio">
                                A professional journey extending over 25 years, which began with engagements
                                in criminal litigations at the grass roots level, before the Courts of Magistrates.
                                His practice gradually progressed to representing, defending and prosecuting
                                clients in serious Sessions Cases and matters pertaining to Special Laws. Over
                                time, there has been a consistent focus on practising primarily before the High
                                Court of Karnataka, while also maintaining representation in cases before the
                                Sessions Courts and the Magistrate Courts.
                            </p>
                            <p className="founder-bio">
                                In addition to his extensive experience in conducting sessions trials, Amar
                                Correa has represented and defended clients in difficult and complex trials
                                before CBI Courts in cases involving financial frauds of high magnitude, cyber
                                crimes, extradition proceedings, cases under Organised Crime Acts, mining
                                related offences, offences under the Narcotics Drugs and Psychotropic
                                Substances Act, prosecutions under the Company’s Law investigated by the
                                SFIO and general offences under the Indian Penal Code.
                            </p>
                            <p className="founder-bio">
                                Amar Correa has routinely handled Matrimonial matters like Divorce, Child
                                Custody and Maintenance. He has represented before High Court as well as
                                Family courts in matters involving Foreign Court orders on Divorce and Child
                                Custody, including filing of Habeas Corpus Petitions before High Court.     </p>
                            <p className="founder-bio">
                                The practice before the Karnataka High Court has mostly involved habeas
                                corpus petitions, criminal appeals, criminal revision petitions, petitions for bails,
                                petitions under Section 482 Cr.P.C. for quashing orders and opposition to
                                quashing prayers, and other writ petitions arising out of violations of
                                fundamental and constitutional rights as well as under general laws, including
                                public interest litigations.    </p>
                            <p className="founder-bio">
                                It has been a steady feature of Amar Correa’s professional practice to represent
                                the Complainant and victims before the High Court in criminal appeals and
                                petitions for quashing or bail.
                            </p>
                            <p className="founder-bio">
                                He has represented the State of Karnataka as Special Public Prosecutor in
                                select cases, and has likewise been appointed Amicus Curiae before both the
                                Sessions Courts and the High Court.    </p>
                        </div>
                    </div>

                    <div className="founder-img-wrap">
                        <span className="hidetext">&nbsp;</span>
                        <h2 className="hidetext">&nbsp;</h2>
                        <span className="hidetext">&nbsp;</span>
                         <Image
                            src="/images/amar.svg"
                            alt="Amar Correa"
                            className=''
                            width={400}
                            height={600}
                            style={{ width: '100%',padding:'20px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
