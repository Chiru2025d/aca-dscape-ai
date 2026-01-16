"use client";

import FloatingContact from "@/components/floatingcontact";

export default function ClientLayout({ children }) {
  return (
    <>
      {children}
      <FloatingContact />
    </>
  );
}
