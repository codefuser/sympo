import principalImg from "@/assets/principal.jpg";
import hodImg from "@/assets/hod.jpg";
import coordinatorImg from "@/assets/coordinator.jpg";
import { Mail } from "lucide-react";

const faculty = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Principal",
    dept: "College XYZ",
    qual: "Ph.D, IIT Bombay",
    message: "Inspiring the next generation of engineers through innovation and excellence.",
    img: principalImg,
    email: "principal@collegexyz.edu",
  },
  {
    name: "Mr. Suresh Babu",
    role: "Secretary",
    dept: "College XYZ",
    qual: "M.B.A, Anna University",
    message: "Empowering students with the resources and opportunities to excel.",
    img: principalImg,
    email: "secretary@collegexyz.edu",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Head of Department",
    dept: "ECE Department",
    qual: "Ph.D, IIT Madras",
    message: "ELECTRONICA is a platform where ideas transform into impactful technologies.",
    img: hodImg,
    email: "hod.ece@collegexyz.edu",
  },
  {
    name: "Mr. Arun Venkat",
    role: "Symposium Coordinator",
    dept: "ECE Department",
    qual: "M.Tech, NIT Trichy",
    message: "We've curated events that challenge, inspire, and reward creative thinking.",
    img: coordinatorImg,
    email: "sympo@collegexyz.edu",
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-24 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">Leadership</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            College <span className="gradient-text">Heads</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((person) => (
            <div key={person.name} className="card-glow rounded-2xl overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-display text-xs text-primary tracking-widest uppercase mb-1">
                  {person.role}
                </p>
                <h3 className="font-display text-base font-bold text-foreground mb-0.5">
                  {person.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-1">{person.qual}</p>
                <p className="text-xs text-accent mb-3">{person.dept}</p>
                <p className="text-xs text-muted-foreground italic leading-relaxed mb-4">
                  "{person.message}"
                </p>
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  {person.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
