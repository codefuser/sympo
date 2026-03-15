import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  FacebookIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-display text-sm font-bold gradient-text tracking-widest">
                SPARKTRON'26
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              National Level Technical Symposium organized by the Department of
              Electronics & Communication Engineering, Thamirabharani
              Engineering College.
            </p>
          </div>

          <div>
            <p className="font-display text-xs text-primary tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3" /> tecece9531@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3" /> +91 7708 685 345
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3" /> Thamirabharani Engineering
                College, Tirunelveli, Tamil Nadu
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-5">
              <button
                onClick={() => {
                  const registerBtn = document.querySelector("#home button");
                  registerBtn?.dispatchEvent(
                    new MouseEvent("click", { bubbles: true }),
                  );
                }}
                className="px-6 py-2  bg-cyan-500  text-black  font-bold  tracking-widest  text-[10px] rounded-sm transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,242,255,0.9)] "           >
                REGISTER NOW
              </button>
            </div>
            <p className="font-display text-xs text-primary tracking-widest uppercase mb-4">
              Follow Us
            </p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/tec_edu_in/"
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              {[Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.youtube.com/channel/UCQ_0orcCi7qMz0RfKsS7GPQ?view_as=subscriber"
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              {[Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="https://x.com/TEC_ENGG"
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
              {[FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.facebook.com/ThamirabharaniEngineeringCollege"
                  className="w-9 h-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="section-divider mb-6" />

        <p className="text-center text-xs text-muted-foreground">
          © 2026 SPARKTRON'26 — Dept. of ECE, Thamirabharani Engineering
          College. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
