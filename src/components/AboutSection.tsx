import { BookOpen, Cpu, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">
            Our Institution
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            About{" "}
            <span className="gradient-text">
              Thamirabharani Engineering College
            </span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-1 gap-10 items-center mb-20">
          <div>
            <p className="text-muted-foreground leading-relaxed  mb-6">
              Thamirabharani Engineering College which is in the Tirunelveli
              Corporation limits is located at Thatchanallur, 5km away from
              Palayamkottai and 40 km from Tuticorin airport. Unfolding its
              grandeur over 25 acres of land, the college exhibits an attractive
              panorama conducive to studies. Considering a holistic approach to
              life and education, an ambient infrastructure is provided for the
              students. They enjoy a natural sanctuary of birds, magnificent
              scenery of evergreen trees and amazing mountains and a gorgeous
              garden of multicolored flowers. Thamirabharani Engineering College
              was founded with the noble vision to raise professionals and
              leaders of high academic caliber and unblemished character,
              nurtured with a strong motivation and commitment to serve
              humanity. TEC aims at educating & training its students to become
              not only competent professionals but also excellent human beings
              to influence the quality of life of people around.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Thamirabharani Engineering College was established with the goal
              of producing outstanding students in Technical and Business fields
              and preparing them to tackle the challenges of a dynamic and
              rapidly changing world. The management implements an
              interdisciplinary approach to the programs of Anna University,
              making sure that practical applications are combined with the
              classroom material. All the programs offered by the institute are
              recognized by and affiliated to statutory bodies like the All
              India Council of Technical Education (AICTE), New Delhi and Anna
              University, Chennai. In a nutshell, Thamirabharani Engineering
              College is a co-educational, residential, technological college
              imparting holistic education to develop the technical and the
              character of the students.
            </p>
            <br />
            {/* <p className="text-muted-foreground leading-relaxed">
              Through symposiums and collaborative activities, the college helps
              students build creativity, leadership, and industry-ready
              knowledge for future careers.
            </p> */}
          </div>
          {/* <div className="grid grid-cols-2 gap-6" >
            {[
              { icon: BookOpen, label: "Established", value: "1985" },
              { icon: Users, label: "Alumni Network", value: "15,000+" },
              { icon: Cpu, label: "Departments", value: "7" },
              { icon: BookOpen, label: "NBA Accredited", value: "Programs" },
            ].map((item) => (
              <div
                key={item.label}
                className="card-glow rounded-lg p-5 text-center"
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="font-display text-xl font-bold gradient-text">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground mt-6 tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div> */}
        </div>

        {/* ECE Department */}
        <div className="card-glow rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-7 h-7 text-primary" />
            <h3 className="font-display text-2xl font-bold text-foreground">
              Department of <span className="gradient-text">ECE</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Department of Electronics and Communication Engineering was
                established in the year 2011. The Department offers B.E. Program
                with a vision to produce globally competent professionals. This
                course offered is updated regularly to keep up with the growing
                demands of the research community and the industry. From mobile
                phones to fiber optics to remote sensing, there are exciting
                avenues to explore and create even better ideas. With technology
                becoming all pervasive in everyday life, opportunities for
                electronic engineers are endless. The Department of ECE has well
                qualified and dedicated Faculty members specialized in various
                fields.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With modern laboratories, experienced faculty, and
                industry-oriented training, the department encourages students
                to participate in technical events, workshops, and real-world
                projects in areas like Embedded Systems, IoT, VLSI, and
                Communication Technologies.
              </p>
            </div>
            <div className="space-y-7">
              {[
                { label: "Faculty Members", value: "10+" },
                { label: "Research Projects", value: "20+" },
                { label: "Annual Intake", value: "60" },
                { label: "Placement Rate", value: "90%" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between items-center border-b border-border pb-2"
                >
                  <span className="text-sm text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="font-display text-sm font-bold text-primary">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <br />
          <div className="flex flex-wrap gap-3">
            {[
              "VLSI Design",
              "Embedded Systems",
              "IoT",
              "Robotics",
              "AI & ML",
              "RF Comm",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-display font-semibold text-primary border border-primary/30 bg-primary/5 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
