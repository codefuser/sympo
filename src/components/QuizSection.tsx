import { useState } from "react";
import { Lock, CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

const SECRET_CODE = "ECE2025";

const questions = [
  {
    q: "What does BJT stand for?",
    options: ["Bipolar Junction Transistor", "Binary Junction Transfer", "Base Junction Terminal", "Bipolar Joint Transfer"],
    ans: 0,
  },
  {
    q: "Which modulation technique is used in FM radio?",
    options: ["Amplitude Modulation", "Frequency Modulation", "Phase Modulation", "Pulse Code Modulation"],
    ans: 1,
  },
  {
    q: "The unit of capacitance is:",
    options: ["Henry", "Ohm", "Farad", "Weber"],
    ans: 2,
  },
  {
    q: "What is the full form of VLSI?",
    options: ["Very Large Scale Integration", "Variable Logic Signal Integration", "Very Low Signal Interface", "Voltage Logic Scale Integration"],
    ans: 0,
  },
  {
    q: "Which gate gives output 1 only when all inputs are 1?",
    options: ["OR", "NAND", "AND", "NOR"],
    ans: 2,
  },
  {
    q: "The Nyquist sampling theorem states the sampling rate must be at least:",
    options: ["Equal to the signal frequency", "Half the signal frequency", "Twice the highest frequency", "Four times the highest frequency"],
    ans: 2,
  },
  {
    q: "Which of the following is a passive component?",
    options: ["Transistor", "Op-Amp", "Resistor", "Diode"],
    ans: 2,
  },
  {
    q: "What does PCB stand for in electronics?",
    options: ["Printed Circuit Board", "Programmable Control Bus", "Process Control Block", "Primary Circuit Base"],
    ans: 0,
  },
  {
    q: "In a common-emitter amplifier, the output is:",
    options: ["In phase with input", "180° out of phase with input", "90° out of phase with input", "270° out of phase with input"],
    ans: 1,
  },
  {
    q: "Which transmission medium has the highest bandwidth?",
    options: ["Twisted pair", "Coaxial cable", "Optical fibre", "Microwave"],
    ans: 2,
  },
  {
    q: "The binary equivalent of decimal 25 is:",
    options: ["11001", "10011", "11010", "10110"],
    ans: 0,
  },
  {
    q: "Which protocol is used for IP address assignment automatically?",
    options: ["FTP", "DHCP", "SMTP", "DNS"],
    ans: 1,
  },
  {
    q: "An ideal op-amp has:",
    options: ["Zero input impedance", "Finite output impedance", "Infinite bandwidth", "Finite gain"],
    ans: 2,
  },
  {
    q: "What is the function of a multiplexer (MUX)?",
    options: ["Converts digital to analog", "Selects one of many inputs to output", "Stores data temporarily", "Amplifies signals"],
    ans: 1,
  },
  {
    q: "Which semiconductor device is used as a voltage regulator?",
    options: ["Schottky diode", "LED", "Zener diode", "Varactor diode"],
    ans: 2,
  },
  {
    q: "Fourier transform is used to convert a signal from:",
    options: ["Time domain to frequency domain", "Frequency domain to time domain", "Analog to digital", "Digital to analog"],
    ans: 0,
  },
  {
    q: "What is the Boolean expression for a NAND gate with inputs A and B?",
    options: ["A·B", "A+B", "̄(A·B)", "̄A · ̄B"],
    ans: 2,
  },
  {
    q: "In OSI model, which layer handles routing?",
    options: ["Data Link Layer", "Transport Layer", "Network Layer", "Session Layer"],
    ans: 2,
  },
  {
    q: "The gain of an antenna is measured in:",
    options: ["Watts", "dB", "Hz", "Ohms"],
    ans: 1,
  },
  {
    q: "Which type of ADC is the fastest?",
    options: ["Successive Approximation ADC", "Flash ADC", "Sigma-Delta ADC", "Dual Slope ADC"],
    ans: 1,
  },
];

type Phase = "lock" | "quiz" | "result";

export default function QuizSection() {
  const [phase, setPhase] = useState<Phase>("lock");
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showAnswer, setShowAnswer] = useState(false);

  const handleUnlock = () => {
    if (code.trim().toUpperCase() === SECRET_CODE) {
      setPhase("quiz");
      setCodeError("");
    } else {
      setCodeError("Invalid code. Please check with the organizers.");
    }
  };

  const handleSelect = (idx: number) => {
    if (showAnswer) return;
    setSelected(idx);
  };

  const handleNext = () => {
    const updated = [...answers];
    updated[current] = selected;
    setAnswers(updated);
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      setSelected(null);
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
      } else {
        setAnswers(updated);
        setPhase("result");
      }
    }, 1000);
  };

  const score = answers.filter((a, i) => a === questions[i].ans).length;

  const handleRetry = () => {
    setPhase("lock");
    setCode("");
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setShowAnswer(false);
  };

  return (
    <section id="quiz" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">Registered Students Only</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            ECE <span className="gradient-text">Tech Quiz</span>
          </h2>
          <p className="text-muted-foreground text-sm">20 MCQ questions · Enter the secret code to begin</p>
          <div className="section-divider w-24 mx-auto mt-4" />
        </div>

        {/* Lock Phase */}
        {phase === "lock" && (
          <div className="card-glow rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Quiz Locked</h3>
            <p className="text-sm text-muted-foreground mb-6">
              This quiz is exclusively for registered participants.<br />
              Enter the secret code shared by the organizers to unlock.
            </p>
            <input
              type="text"
              value={code}
              onChange={(e) => { setCode(e.target.value); setCodeError(""); }}
              onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
              placeholder="Enter secret code"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-center font-display tracking-widest text-foreground text-sm focus:outline-none focus:border-primary mb-3 placeholder:text-muted-foreground"
            />
            {codeError && <p className="text-xs text-destructive mb-3">{codeError}</p>}
            <button
              onClick={handleUnlock}
              className="w-full py-3 rounded-lg font-display font-bold text-sm tracking-widest text-primary-foreground transition-all hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              UNLOCK QUIZ
            </button>
          </div>
        )}

        {/* Quiz Phase */}
        {phase === "quiz" && (
          <div className="card-glow rounded-2xl p-6 md:p-8">
            {/* Progress */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-xs text-muted-foreground tracking-widest">
                Q {current + 1} / {questions.length}
              </span>
              <span className="font-display text-xs gradient-text font-bold">
                {Math.round(((current) / questions.length) * 100)}% complete
              </span>
            </div>
            <div className="w-full h-1 bg-border rounded-full mb-6">
              <div
                className="h-1 rounded-full transition-all duration-500"
                style={{ width: `${(current / questions.length) * 100}%`, background: "var(--gradient-primary)" }}
              />
            </div>

            <p className="font-display text-sm md:text-base font-bold text-foreground mb-6 leading-relaxed">
              {current + 1}. {questions[current].q}
            </p>

            <div className="space-y-3 mb-6">
              {questions[current].options.map((opt, idx) => {
                let style = "border-border bg-background/50 text-muted-foreground hover:border-primary/50 hover:text-foreground";
                if (selected === idx && !showAnswer) style = "border-primary bg-primary/10 text-foreground";
                if (showAnswer) {
                  if (idx === questions[current].ans) style = "border-green-500 bg-green-500/10 text-green-400";
                  else if (selected === idx) style = "border-destructive bg-destructive/10 text-destructive";
                  else style = "border-border bg-background/50 text-muted-foreground opacity-50";
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelect(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${style}`}
                  >
                    <span className="font-display font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null || showAnswer}
              className="w-full py-3 rounded-lg font-display font-bold text-sm tracking-widest text-primary-foreground transition-all hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ background: "var(--gradient-primary)" }}
            >
              {current + 1 === questions.length ? "SUBMIT QUIZ" : "NEXT QUESTION"}
            </button>
          </div>
        )}

        {/* Result Phase */}
        {phase === "result" && (
          <div className="card-glow rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-black gradient-text mb-2">Quiz Completed!</h3>
            <p className="text-muted-foreground text-sm mb-6">Here's how you did</p>

            <div className="flex items-center justify-center gap-8 mb-6">
              <div>
                <p className="font-display text-4xl font-black gradient-text">{score}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Correct</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-4xl font-black text-foreground">{questions.length - score}</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Wrong</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-4xl font-black gradient-text">{Math.round((score / questions.length) * 100)}%</p>
                <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Score</p>
              </div>
            </div>

            {/* Per-question review */}
            <div className="text-left space-y-2 mb-6">
              {questions.map((q, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  {answers[i] === q.ans ? (
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  )}
                  <span className="text-muted-foreground">{q.q}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary/50 text-sm font-display font-bold text-primary hover:bg-primary/10 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
