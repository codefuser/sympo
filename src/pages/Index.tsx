import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SymposiumSection from "@/components/SymposiumSection";
import EventsSection from "@/components/EventsSection";
import FacultySection from "@/components/FacultySection";
// import QuizSection from "@/components/QuizSection";
import Footer from "@/components/Footer";
import RegisterModal from "@/components/RegisterModal";

const Index = () => {
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection onRegister={() => setRegisterOpen(true)} />
        <AboutSection />
        <SymposiumSection />
        <EventsSection />
        <FacultySection />
        {/* <QuizSection /> */}
      </main>
      <Footer />
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </div>
  );
};

export default Index;
