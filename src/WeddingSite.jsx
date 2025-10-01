import { useEffect, useState } from 'react';

export default function WeddingSite() {
  return (
    <div className="min-h-screen text-silver bg-gradient-to-b from-[#15121d] via-[#1b1726] to-[#0e0c13] relative overflow-hidden">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=EB+Garamond:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Moving clouds background */}
      <div className="absolute inset-0 opacity-40 -z-10 clouds" aria-hidden>
        <svg className="w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#231a36"/>
              <stop offset="100%" stopColor="#0f0c14"/>
            </linearGradient>
            <filter id="blur"><feGaussianBlur stdDeviation="30"/></filter>
          </defs>
          <rect width="1600" height="900" fill="url(#g1)"/>
          <g filter="url(#blur)">
            <ellipse cx="300" cy="200" rx="320" ry="140" fill="#2b2240" opacity="0.45"/>
            <ellipse cx="1200" cy="300" rx="380" ry="170" fill="#2a1f3d" opacity="0.38"/>
            <ellipse cx="800" cy="600" rx="500" ry="220" fill="#231a36" opacity="0.35"/>
          </g>
        </svg>
      </div>

      {/* Decorative side/bottom vine border */}
      <VineBorder />

      {/* Grain + vignette overlays */}
      <div className="grain vignette absolute inset-0 pointer-events-none" aria-hidden />

      {/* HERO */}
      <header className="relative max-w-3xl mx-auto px-6 pt-24 pb-16 text-center font-elegant">
        <Moon />
        <h1 className="mt-8 text-3xl md:text-4xl tracking-wide text-silver">You’re Invited</h1>
        <h2 className="mt-4 text-5xl md:text-6xl font-semibold text-silver">Patrick&nbsp;&amp;&nbsp;Kayla</h2>
        <p className="mt-3 italic text-lg text-[color:var(--muted-silver)]">summon your presence</p>

        <div className="mt-8 grid grid-cols-[auto,1fr] gap-4 items-start max-w-2xl mx-auto">
          <Candles />
          <div className="text-left">
            <p className="text-xl">Saturday, March 21, 2026</p>
            <p className="text-xl nbb">1886&nbsp;Crescent&nbsp;Hotel&nbsp;&amp;&nbsp;Spa</p>
            <p className="text-xl">Eureka Springs, Arkansas</p>
            <p className="mt-4 text-lg">Ceremony &amp; Reception</p>
            <p className="text-lg">Ballroom &middot; 4:30 in the afternoon</p>
            <p className="mt-4 text-xl italic">A night of feasting &amp; dancing</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#details" className="panel px-5 py-3 rounded-2xl font-medium text-silver hover:bg-white/5 transition">Event Details</a>
        </div>

        {/* Countdown */}
        <Countdown targetDate={new Date('2026-03-21T16:30:00-05:00')} />
      </header>

      {/* DETAILS */}
      <main id="details" className="relative z-0 font-elegant">
        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="panel rounded-3xl p-6 md:p-8">
            <h3 className="section-title text-2xl md:text-3xl mb-3">Venue</h3>
            <p className="text-[color:var(--muted-silver)] leading-relaxed">
              1886 Crescent Hotel &amp; Spa — Eureka Springs, Arkansas
              <br/>
              <span className="opacity-80">Address:</span> 75 Prospect Ave, Eureka Springs, AR 72632
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="panel px-4 py-2 rounded-xl" href="https://www.crescent-hotel.com/" target="_blank" rel="noreferrer">Venue Website</a>
              <a className="panel px-4 py-2 rounded-xl" href="https://maps.google.com/?q=1886+Crescent+Hotel+%26+Spa+Eureka+Springs" target="_blank" rel="noreferrer">Open in Maps</a>
              <a className="panel px-4 py-2 rounded-xl" href="https://www.crescent-hotel.com/accommodations/" target="_blank" rel="noreferrer">Lodging</a>
            </div>
            <p className="mt-4 text-[color:var(--muted-silver)] text-sm leading-relaxed">
              Ceremony &amp; Reception: Ballroom · 4:30 in the afternoon. Additional details (room blocks, shuttles, spooky extras) will be posted here.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden shadow-lg border border-[color:var(--muted-silver)]/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.80209466093!2d-93.74007762343348!3d36.40543947236732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf0a5f6974a21f%3A0xa915d19edecf4a07!2s1886%20Crescent%20Hotel%20%26%20Spa!5e0!3m2!1sen!2sus!4v1727720000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center pb-12 font-elegant text-sm text-[color:var(--muted-silver)]">© 2026 Patrick & Kayla</footer>
    </div>
  )
}

function Countdown({ targetDate }){
  const [now, setNow] = useState(new Date());
  useEffect(()=>{
    const t = setInterval(()=> setNow(new Date()), 1000);
    return ()=> clearInterval(t);
  },[]);
  const diff = Math.max(0, targetDate - now);
  const s = Math.floor(diff/1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;
  const done = diff === 0;
  return (
    <div className="mt-6 flex justify-center">
      <div className="panel rounded-2xl px-5 py-3 font-elegant text-silver text-lg" aria-live="polite">
        {done ? (
          <span>It’s time to feast & dance!</span>
        ) : (
          <span>
            {days} days · {String(hours).padStart(2,'0')}:{String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')} until the celebration
          </span>
        )}
      </div>
    </div>
  );
}

function Moon(){
  return (
    <div aria-hidden className="flex justify-center">
      <svg className="moon-glow" width="80" height="80" viewBox="0 0 80 80" fill="none">
        <defs>
          <radialGradient id="mg" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(40 40) rotate(90) scale(40)">
            <stop offset="0%" stopColor="var(--moon)"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="28" fill="var(--moon)"/>
        <circle cx="52" cy="34" r="28" fill="#0e0c13"/>
        <circle cx="40" cy="40" r="38" fill="url(#mg)" opacity="0.3"/>
      </svg>
    </div>
  )
}

function Candles(){
  return (
    <div aria-hidden className="flex gap-3 pt-2">
      {[70,110].map((h,i)=> (
        <svg key={i} width="36" height={h} viewBox={`0 0 36 ${h}`} className="floaty">
          <defs>
            <linearGradient id={`cg${i}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#edece8"/>
              <stop offset="100%" stopColor="#a9a8a4"/>
            </linearGradient>
          </defs>
          <rect x="12" y="18" width="12" height={h-28} rx="3" fill={`url(#cg${i})`} stroke="#4a4654" strokeOpacity=".3"/>
          <ellipse cx="18" cy="18" rx="10" ry="6" fill="#f6f5f1"/>
          <path d="M18 6 C16 10, 16 16, 18 18 C20 16, 20 10, 18 6 Z" fill="#ffdca8"/>
        </svg>
      ))}
    </div>
  )
}

function VineBorder(){
  return (
    <div aria-hidden>
      {/* Left vine */}
      <svg className="hidden md:block absolute left-4 top-16 bottom-12 w-10 opacity-70" viewBox="0 0 40 600" preserveAspectRatio="none">
        <path d="M20 0 v600" stroke="#3a2f46" strokeWidth="2"/>
        {[80,160,240,320,400,480].map((y,i)=> (
          <path key={i} d={`M20 ${y} c-18 10 -18 30 0 40`} fill="none" stroke="#3a2f46" strokeWidth="2"/>
        ))}
      </svg>
      {/* Right vine */}
      <svg className="hidden md:block absolute right-4 top-16 bottom-12 w-10 opacity-70" viewBox="0 0 40 600" preserveAspectRatio="none">
        <path d="M20 0 v600" stroke="#3a2f46" strokeWidth="2"/>
        {[60,140,220,300,380,460].map((y,i)=> (
          <path key={i} d={`M20 ${y} c18 10 18 30 0 40`} fill="none" stroke="#3a2f46" strokeWidth="2"/>
        ))}
      </svg>
      {/* Bottom border */}
      <svg className="absolute left-8 right-8 bottom-6 h-8 opacity-70" viewBox="0 0 800 80" preserveAspectRatio="none">
        <path d="M0 40 C120 10, 220 60, 340 40 S620 10, 800 40" fill="none" stroke="#3a2f46" strokeWidth="2"/>
      </svg>
    </div>
  )
}