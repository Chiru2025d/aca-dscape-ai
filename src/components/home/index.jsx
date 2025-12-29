import dynamic from "next/dynamic";
import "./home.css";
import Header from "../header.jsx";
import Footer from "../footer.jsx";

// Eager load hero and header (above the fold)
import Hero from "./hero.jsx";

// Lazy load below-fold sections
const About = dynamic(() => import("./about.jsx"), { ssr: true });
const Culture = dynamic(() => import("./client-cause.jsx"), { ssr: true });
const ExpertisePreview = dynamic(() => import("./our-expertise.jsx"), { ssr: true });
const Founder = dynamic(() => import("./founder.jsx"), { ssr: true });
const TeamPreview = dynamic(() => import("./team.jsx"), { ssr: true });
const LegalUpdatesPreview = dynamic(() => import("./legal-updates.jsx"), { ssr: true });

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Culture />
        <ExpertisePreview />
        <Founder />
        <TeamPreview />
        <LegalUpdatesPreview />
      </main>

      <Footer />
    </>
  );
}
