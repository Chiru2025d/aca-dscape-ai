"use client";

import Image from "next/image";
import styles from "./contact.module.css";

const teamMembers = [
  {
    name: "Amar Correa",
    role: "Advocate – Head Associate",
    phone: "+91 98451 13678",
    email: "amar.correa@acajuris.com",
    image: "/images/team1.png",
    imageSrcSet: "/images/team1@2x.webp 2x, /images/team1@3x.webp 3x",
  },
  {
    name: "Shridevi M. Bhosale",
    role: "Advocate – Senior Associate",
    phone: "+91 77956 11707",
    email: "shridevi.b@acajuris.com",
    image: "/images/team3.png",
    imageSrcSet: "/images/team3@2x.webp 2x, /images/team3@3x.webp 3x",
  },
];

export default function TeamContacts() {
  return (
    <aside className={styles.teamContacts}>
      {teamMembers.map((member, index) => (
        <div key={index} className={styles.teamCard}>

          {/* PROFILE IMAGE */}
          <div className={styles.teamImage}>
            <Image
              src={member.image}
              alt={member.name}
              width={80}
              height={80}
              quality={90}
              sizes="80px"
            />
          </div>

          {/* DETAILS */}
          <div className={styles.teamInfo}>
            <h4 className={styles.teamName}>{member.name}</h4>

            <p className={styles.teamRole}>{member.role}</p>

            <p className={styles.teamContact}>
              Phone: {member.phone}
            </p>

            <p className={styles.teamContact}>
              Email: {member.email}
            </p>
          </div>

        </div>
      ))}
    </aside>
  );
}
