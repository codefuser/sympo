import { ExternalLink, X, ClipboardList, QrCode } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function RegisterModal({ open, onClose }: RegisterModalProps) {
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-0 border-border bg-background">
        <div className="sticky top-0 z-10 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <DialogTitle className="font-display text-base font-bold gradient-text tracking-widest">
              REGISTER — FUTRONIX'26
            </DialogTitle>
            <p className="text-xs text-muted-foreground mt-0.5">Fill in the form below to secure your spot</p>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Payment QR */}
          <div className="card-glow rounded-xl p-5">
            <p className="font-display text-xs text-primary tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              Step 1 — Pay Registration Fee
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              {/* QR Placeholder */}
              <div className="shrink-0 w-40 h-40 rounded-xl border-2 border-dashed border-primary/40 bg-primary/5 flex flex-col items-center justify-center gap-2 text-center">
                <QrCode className="w-10 h-10 text-primary/40" />
                <p className="text-xs text-muted-foreground px-2 leading-tight">
                  Replace with your<br />UPI QR image
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <p className="font-display font-bold text-foreground text-sm">Registration Fee: ₹200 per event</p>
                <ul className="space-y-1.5 text-muted-foreground text-xs">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                    Scan the QR code and complete payment via UPI.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                    Take a <span className="text-primary font-semibold">screenshot</span> of the payment confirmation.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0" />
                    Upload the screenshot in the form below (required).
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="card-glow rounded-xl p-5">
            <p className="font-display text-xs text-primary tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Step 2 — Fill Registration Form
            </p>
            <div className="flex items-start gap-3 bg-primary/10 border border-primary/20 rounded-xl p-3 mb-4">
              <ClipboardList className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">
                Fields required:{" "}
                <span className="text-primary font-semibold">Name, Mobile Number, Department, College Name, Email</span>{" "}
                and <span className="text-primary font-semibold">Payment Screenshot</span>. Each email can only be used once.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src={"https://docs.google.com/forms/d/e/1FAIpQLScChLyBESZ8snIWtNv7F_o2KRss4-xyckU9As076UskRd93AA/viewform?usp=header"}
                // src={GOOGLE_FORM_URL}
                width="100%"
                height="640"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="FUTRONIX'26 Registration Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Having trouble with the embedded form?</p>
              <a
                href={"https://docs.google.com/forms/d/e/1FAIpQLScChLyBESZ8snIWtNv7F_o2KRss4-xyckU9As076UskRd93AA/viewform?usp=header".replace("?embedded=true", "")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-display font-bold text-primary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
