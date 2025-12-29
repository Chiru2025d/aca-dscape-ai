import dynamic from "next/dynamic";
import "./home.css";
import Header from "../header.jsx";
import Footer from "../footer.jsx";

// Eager load hero and header (above the fold)
import Hero from "./hero.jsx";

// Lazy load below-fold sections
const About = dynamic(() => import("./about.jsx"), { loading: () => <div /> });
const Culture = dynamic(() => import("./client-cause.jsx"), { loading: () => <div /> });
const ExpertisePreview = dynamic(() => import("./our-expertise.jsx"), { loading: () => <div /> });
const Founder = dynamic(() => import("./founder.jsx"), { loading: () => <div /> });
const TeamPreview = dynamic(() => import("./team.jsx"), { loading: () => <div /> });
const LegalUpdatesPreview = dynamic(() => import("./legal-updates.jsx"), { loading: () => <div /> });

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
