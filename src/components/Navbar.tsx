import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import RegisterModal from "@/components/RegisterModal";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Symposium", href: "#symposium" },
  { label: "Events", href: "#events" },
  { label: "Co-ordinator's", href: "#faculty" },
  // { label: "Quiz", href: "#quiz" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-display text-sm font-bold gradient-text tracking-widest">SPARKTRON'26</span>
          </a>
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setRegisterOpen(true)}
            className="hidden md:inline-flex items-center px-4 py-1.5 rounded text-xs font-display font-bold tracking-widest text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            REGISTER NOW
          </button>
          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-card border-b border-border px-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-sm text-muted-foreground hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setRegisterOpen(true); }}
              className="mt-3 w-full py-2 rounded text-xs font-display font-bold tracking-widest text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              REGISTER NOW
            </button>
          </div>
        )}
      </nav>
      <RegisterModal open={registerOpen} onClose={() => setRegisterOpen(false)} />
    </>
  );
}
