import { ExternalLink, ClipboardList } from "lucide-react";

// Replace this URL with your actual Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

export default function RegistrationSection() {
  return (
    <section id="register" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">Join Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Register</span> Now
          </h2>
          <p className="text-muted-foreground">Last date to register: March 25, 2025</p>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        <div className="card-glow rounded-2xl p-6 md:p-8">
          {/* Info banner */}
          <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6">
            <ClipboardList className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-display text-sm font-bold text-foreground mb-1">Registration Details Required</p>
              <p className="text-xs text-muted-foreground">
                Please fill in your <span className="text-primary font-semibold">Name, Mobile Number, Department, College Name,</span> and a unique <span className="text-primary font-semibold">Email Address</span>. Each email can only be used once.
              </p>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src={GOOGLE_FORM_URL}
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="SPARKTRON'26 Registration Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>

          {/* Fallback open-in-new-tab link */}
          <div className="mt-5 text-center">
            <p className="text-xs text-muted-foreground mb-2">Having trouble viewing the form?</p>
            <a
              href={GOOGLE_FORM_URL.replace("?embedded=true", "")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Open Registration Form in New Tab
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Registration fee: ₹200 per event · Payment collected at venue
        </p>
      </div>
    </section>
  );
}
