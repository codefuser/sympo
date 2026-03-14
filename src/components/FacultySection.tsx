// import principalImg from "@/assets/principal.jpg";
// import hodImg from "@/assets/hod.jpg";
// import coordinatorImg from "@/assets/coordinator.jpg";
// import { Mail } from "lucide-react";

// const faculty = [
//   {
//     name: "Dr. Rajesh Kumar",
//     role: "Principal",
//     dept: "College XYZ",
//     qual: "Ph.D, IIT Bombay",
//     message: "Inspiring the next generation of engineers through innovation and excellence.",
//     img: principalImg,
//     email: "principal@collegexyz.edu",
//   },
//   {
//     name: "Mr. Suresh Babu",
//     role: "Secretary",
//     dept: "College XYZ",
//     qual: "M.B.A, Anna University",
//     message: "Empowering students with the resources and opportunities to excel.",
//     img: principalImg,
//     email: "secretary@collegexyz.edu",
//   },
//   {
//     name: "Dr. Priya Sharma",
//     role: "Head of Department",
//     dept: "ECE Department",
//     qual: "Ph.D, IIT Madras",
//     message: "ELECTRONICA is a platform where ideas transform into impactful technologies.",
//     img: hodImg,
//     email: "hod.ece@collegexyz.edu",
//   },
//   {
//     name: "Mr. Arun Venkat",
//     role: "Symposium Coordinator",
//     dept: "ECE Department",
//     qual: "M.Tech, NIT Trichy",
//     message: "We've curated events that challenge, inspire, and reward creative thinking.",
//     img: coordinatorImg,
//     email: "sympo@collegexyz.edu",
//   },
// ];

// export default function FacultySection() {
//   return (
//     <section id="faculty" className="py-24 px-4 relative">
//       <div className="absolute top-0 left-0 right-0 h-px section-divider" />
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">Leadership</p>
//           <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
//             College <span className="gradient-text">Heads</span>
//           </h2>
//           <div className="section-divider w-24 mx-auto" />
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {faculty.map((person) => (
//             <div key={person.name} className="card-glow rounded-2xl overflow-hidden group">
//               <div className="relative h-56 overflow-hidden">
//                 <img
//                   src={person.img}
//                   alt={person.name}
//                   className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
//               </div>
//               <div className="p-5">
//                 <p className="font-display text-xs text-primary tracking-widest uppercase mb-1">
//                   {person.role}
//                 </p>
//                 <h3 className="font-display text-base font-bold text-foreground mb-0.5">
//                   {person.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground mb-1">{person.qual}</p>
//                 <p className="text-xs text-accent mb-3">{person.dept}</p>
//                 <p className="text-xs text-muted-foreground italic leading-relaxed mb-4">
//                   "{person.message}"
//                 </p>
//                 <a
//                   href={`mailto:${person.email}`}
//                   className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors"
//                 >
//                   <Mail className="w-3 h-3" />
//                   {person.email}
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


/////////////////2--------------------------------------------------------
// import principalImg from "@/assets/principal.jpg";
// import hodImg from "@/assets/hod.jpg";
// import coordinatorImg from "@/assets/coordinator.jpg";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";

// import { ChevronLeft, ChevronRight } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";

// const faculty = [
//   { name: "Dr. Rajesh Kumar", role: "Principal", qual: "Ph.D IIT Bombay", img: principalImg },
//   { name: "Mr. Suresh Babu", role: "Secretary", qual: "MBA Anna University", img: principalImg },
//   { name: "Dr. Priya Sharma", role: "HOD", qual: "Ph.D IIT Madras", img: hodImg },
//   { name: "Mr. Arun Venkat", role: "Coordinator", qual: "M.Tech NIT Trichy", img: coordinatorImg },
//   { name: "Dr. Kumar", role: "Professor", qual: "Ph.D", img: hodImg },
//   { name: "Dr. Meena", role: "Professor", qual: "Ph.D", img: hodImg },
//   { name: "Mr. Ravi", role: "Assistant Professor", qual: "M.Tech", img: coordinatorImg },
//   { name: "Ms. Divya", role: "Assistant Professor", qual: "M.Tech", img: coordinatorImg },
//   { name: "Dr. Arjun", role: "Professor", qual: "Ph.D", img: hodImg },
// ];

// export default function FacultySection() {
//   return (
//     <section className="py-24 px-4">

//       <div className="max-w-7xl mx-auto">

//         <div className="flex justify-between items-center mb-10">

//           <h2 className="text-4xl font-bold">
//             College <span className="text-cyan-400">Heads</span>
//           </h2>

//           <div className="flex gap-3">
//             <div className="swiper-button-prev-custom cursor-pointer p-2 bg-[#0f1a2b] rounded-lg">
//               <ChevronLeft size={20}/>
//             </div>

//             <div className="swiper-button-next-custom cursor-pointer p-2 bg-[#0f1a2b] rounded-lg">
//               <ChevronRight size={20}/>
//             </div>
//           </div>

//         </div>

//         <Swiper
//           modules={[Autoplay, Navigation]}
//           navigation={{
//             nextEl: ".swiper-button-next-custom",
//             prevEl: ".swiper-button-prev-custom",
//           }}
//           slidesPerView={4}
//           spaceBetween={25}
//           loop={true}
//           speed={7000}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           breakpoints={{
//             320:{slidesPerView:1},
//             640:{slidesPerView:2},
//             1024:{slidesPerView:4},
//           }}
//           className="facultySlider"
//         >

//           {faculty.map((person, index) => (

//             <SwiperSlide key={index}>

//               <div className="bg-[#0c1624] rounded-2xl overflow-hidden shadow-xl group">

//                 <div className="h-64 overflow-hidden">

//                   <img
//                     src={person.img}
//                     alt={person.name}
//                     className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
//                   />

//                 </div>

//                 <div className="p-5 text-center">

//                   <p className="text-xs uppercase text-cyan-400 tracking-wider">
//                     {person.role}
//                   </p>

//                   <h3 className="font-bold text-lg mt-1">
//                     {person.name}
//                   </h3>

//                   <p className="text-sm text-gray-400">
//                     {person.qual}
//                   </p>

//                 </div>

//               </div>

//             </SwiperSlide>

//           ))}

//         </Swiper>

//       </div>

//     </section>
//   );
// }

/////////////////3--------------------------------------------------------
import React from "react";

const organizingCommittee = [
  { name: "Mr. Arun Kumar", role: "Convenor" },
  { name: "Ms. Divya Lakshmi", role: "Coordinator" },
];

const associationMembers = [
  { name: "Rakesh", role: "President" },
  { name: "Sanjay", role: "Secretary" },
  { name: "Harini", role: "Treasurer" },
  { name: "Vignesh", role: "Vice President" },
  { name: "Priya", role: "Joint Secretary" },
  { name: "Karthik", role: "Executive Member" },
];

export default function FacultySection() {
  return (
    <section
      id="faculty"
      className="py-24 bg-[#090B11] text-white relative overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Symposium <span className="text-cyan-400">Team</span>
        </h2>

        <div className="mt-4 h-1 w-24 bg-cyan-500 mx-auto rounded-full blur-[1px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Organizing Committee */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 text-cyan-300">
            Organizing Committee
          </h3>

          <div className="grid md:grid-cols-2 gap-8 justify-center">
            {organizingCommittee.map((person, index) => (
              <div
                key={index}
                className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:scale-105 transition duration-500"
              >
                <div className="rounded-2xl bg-[#111827] p-8 text-center h-full">
                  <h4 className="text-xl font-bold group-hover:text-cyan-300 transition">
                    {person.name}
                  </h4>

                  <p className="text-sm mt-2 text-gray-400 tracking-wider">
                    {person.role}
                  </p>

                  <div className="mt-4 h-[1px] w-0 bg-cyan-400 mx-auto group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Association Members */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10 text-purple-300">
            Association Members
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {associationMembers.map((person, index) => (
              <div
                key={index}
                className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:scale-105 transition duration-500"
              >
                <div className="rounded-2xl bg-[#111827] p-8 text-center h-full">
                  <h4 className="text-lg font-bold group-hover:text-purple-300 transition">
                    {person.name}
                  </h4>

                  <p className="text-sm mt-2 text-gray-400 tracking-wider">
                    {person.role}
                  </p>

                  <div className="mt-4 h-[1px] w-0 bg-purple-400 mx-auto group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}