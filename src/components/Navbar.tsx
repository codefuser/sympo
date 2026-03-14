"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import RegisterModal from "@/components/RegisterModal";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Symposium", href: "#symposium" },
  { label: "Events", href: "#events" },
  { label: "Co-ordinator's", href: "#faculty" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  useEffect(() => {
    // 1. Scroll listener for background color
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    // 2. Intersection Observer for highlighting links
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the upper-middle of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that have an ID matching our nav items
    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="font-display text-sm font-bold tracking-widest text-white">SPARKTRON'26</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm transition-all duration-200 tracking-wide font-medium ${
                      isActive 
                        ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" 
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => setRegisterOpen(true)}
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded text-xs font-bold tracking-widest bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
          >
            REGISTER NOW
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden bg-black border-b border-white/10 px-4 pb-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-3 text-sm font-medium ${
                    isActive ? "text-cyan-400" : "text-gray-400"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </nav>
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
}