<div align="center">

<!-- Animated header banner -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:000000,50:0e4d6b,100:00f2ff&height=200&section=header&text=SPARKTRON%272k26&fontSize=60&fontColor=00f2ff&fontAlignY=38&animation=fadeIn&desc=National%20Level%20Technical%20Symposium&descAlignY=58&descSize=18&descColor=ffffff" />

<!-- Typing animation -->
<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Orbitron&weight=700&size=22&pause=1000&color=00F2FF&center=true&vCenter=true&width=600&lines=Department+of+ECE+%7C+TEC;National+Level+Technical+Symposium;Register+Now+%E2%80%94+ece-sparktron.vercel.app" alt="Typing SVG" />
</a>

<br/><br/>

<!-- Badges row -->
<img src="https://img.shields.io/badge/Event-March%2024%2C%202026-00f2ff?style=for-the-badge&logo=googlecalendar&logoColor=white" />
<img src="https://img.shields.io/badge/Venue-TEC%20Auditorium-0e4d6b?style=for-the-badge&logo=googlemaps&logoColor=white" />
<img src="https://img.shields.io/badge/Edition-16th%20Annual-00f2ff?style=for-the-badge&logo=trophy&logoColor=white" />

<br/><br/>

<!-- Stat badges -->
![GitHub stars](https://img.shields.io/github/stars/codefuser/sympo?style=flat-square&color=00f2ff&labelColor=0d1117)
![GitHub forks](https://img.shields.io/github/forks/codefuser/sympo?style=flat-square&color=00f2ff&labelColor=0d1117)
![GitHub issues](https://img.shields.io/github/issues/codefuser/sympo?style=flat-square&color=00f2ff&labelColor=0d1117)
![GitHub license](https://img.shields.io/github/license/codefuser/sympo?style=flat-square&color=00f2ff&labelColor=0d1117)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-00f2ff?style=flat-square&logo=vercel&logoColor=white&labelColor=0d1117)

</div>

---

<div align="center">

## 🌐 Live Demo

<a href="https://ece-sparktron.vercel.app/">
  <img src="https://img.shields.io/badge/⚡_OPEN_LIVE_WEBSITE-SPARKTRON'2k26-00f2ff?style=for-the-badge&logo=vercel&logoColor=black&labelColor=000000" />
</a>

</div>

---

## 📖 About

> **SPARKTRON'2k26** is a National Level Technical Symposium organized by the **Department of Electronics & Communication Engineering**, Thamirabharani Engineering College — bringing together engineering students from across the country to showcase innovation, compete, and connect.

The website serves as the official platform for event registration, schedule info, and competition details — built with a modern, circuit-board-inspired dark UI.

---

## 📸 Screenshots

<div align="center">

| Home Page | Events Section | Footer & Team |
|:---------:|:--------------:|:-------------:|
| ![Home](src/img/Home.png) | ![Events](src/img/Event.png) | ![Footer](src/img/footer_and_team.png) |

</div>

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| ⚡ **Live Countdown** | Real-time countdown timer to the symposium date |
| 📋 **Event Cards** | Expandable per-event rules and coordinator details |
| 🧾 **Registration Modal** | UPI QR code + embedded Google Form |
| 🎨 **Circuit Animation** | Animated canvas circuit-line background |
| 📱 **Fully Responsive** | Optimized layout for mobile and desktop |
| 🔵 **Scroll Progress Bar** | Glowing cyan progress indicator |
| 🏢 **Sponsors Marquee** | Auto-scrolling sponsor banner |
| 🔗 **Active Nav Highlight** | Intersection Observer–driven navbar highlighting |

</div>

---

## 🛠 Tech Stack

<div align="center">

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/codefuser/sympo.git
cd sympo

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
sparktron-2k26/
├── public/
│   ├── sponsors/          # Sponsor logo images
│   ├── sparktron-preview.png
│   └── favicon.ico
├── src/
│   ├── assets/            # PaymentQR.png
│   ├── components/
│   │   ├── HeroSection.tsx       # Animated hero + countdown
│   │   ├── AboutSection.tsx      # College & ECE dept info
│   │   ├── SymposiumSection.tsx  # Event schedule & theme
│   │   ├── EventsSection.tsx     # Events with rules cards
│   │   ├── FacultySection.tsx    # Organizing committee
│   │   ├── RegisterModal.tsx     # Registration + QR modal
│   │   ├── Sponsors.tsx          # Auto-scroll sponsor strip
│   │   ├── Navbar.tsx            # Sticky nav + active links
│   │   ├── Footer.tsx            # Contact + social links
│   │   ├── ScrollProgress.tsx    # Scroll progress bar
│   │   └── ui/                   # shadcn/ui components
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── hooks/
│   ├── lib/
│   └── img/               # README screenshots
└── README.md
```

---

## 📅 Event Schedule — March 24, 2026

```
🌅 Morning Session                    🌆 Afternoon Session
─────────────────────────────         ─────────────────────────────
09:00 AM  Registration & Check-in     01:00 PM  Lunch Break
09:30 AM  Inauguration Ceremony       02:00 PM  Dumb Charade
10:30 AM  Paper Presentation          02:30 PM  Anagram
11:00 AM  Technical Connection        03:00 PM  Prize Distribution
12:00 PM  Mind Blitz
```

---

## 🏆 Events

| Event | Category | Team Size |
|-------|----------|-----------|
| 📄 Paper Presentation | Technical | 1–2 members |
| 🧠 Mind Blitz | Technical | 1 member |
| 🔗 Tech Connection | Technical | 2 members |
| 🎭 Dumb Charade | Non-Technical | 2 members |
| 🧩 Anagram | Non-Technical | 1 member |

---

## 📬 Contact

<div align="center">

| Channel | Details |
|---------|---------|
| 📧 Email | ecesparktron2k26@gmail.com |
| 📞 Phone | +91 7708 685 345 |
| 📍 Venue | Thamirabharani Engineering College, Tirunelveli, Tamil Nadu |
| 📸 Instagram | [@tec_edu_in](https://www.instagram.com/tec_edu_in/) |
| 🐦 Twitter/X | [@TEC_ENGG](https://x.com/TEC_ENGG) |

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

## 👨‍💻 Developed By

**Codefuser**

[![GitHub](https://img.shields.io/badge/GitHub-codefuser-00f2ff?style=for-the-badge&logo=github&logoColor=white&labelColor=0d1117)](https://github.com/codefuser)

<br/>

<!-- Footer wave -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:00f2ff,50:0e4d6b,100:000000&height=120&section=footer&animation=fadeIn" />

</div>
