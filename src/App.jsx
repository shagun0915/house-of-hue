import React, { useState, useEffect } from 'react';
import Lightbox from './components/Lightbox';

export default function App() {
  const galleryImages = [
    '/gallery/1.JPG',
    '/gallery/2.JPG',
    '/gallery/3.JPG',
    '/gallery/4.JPG',
    '/gallery/5.JPG',
    '/gallery/6.JPG',
    '/gallery/7.JPG',
    '/gallery/8.JPG',
    '/gallery/9.JPG',
    '/gallery/10.JPG',
    '/gallery/11.JPG',
    '/gallery/12.JPG',
    '/gallery/13.JPG',
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 120; // approximate navbar height
          const elementPos = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPos - navHeight,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  function openLightbox(i) {
    setCurrentIndex(i);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function prev() {
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }

  function next() {
    setCurrentIndex((i) => (i + 1) % galleryImages.length);
  }

  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-pink-100 selection:text-pink-900 bg-[#fbf1f6] text-[#5d4a62]">
      <div className="absolute top-[-12%] left-[-10%] w-[48vw] h-[48vw] rounded-full bg-pink-100/75 blur-[120px] pointer-events-none animate-pulse duration-[9500ms]" />
      <div className="absolute bottom-[-12%] right-[-10%] w-[62vw] h-[62vw] rounded-full bg-[#fff2d8]/70 blur-[140px] pointer-events-none" />
      <div className="absolute top-[25%] right-[16%] w-[34vw] h-[34vw] rounded-full bg-sky-100/45 blur-[100px] pointer-events-none" />
      <div className="absolute left-[8%] top-[50%] w-28 h-28 rounded-full bg-[#fff0f9]/80 blur-[40px] pointer-events-none" />
      <div className="absolute right-[14%] top-[70%] w-24 h-24 rounded-full bg-[#fff6dc]/90 blur-[32px] pointer-events-none" />

      <nav className="sticky top-0 z-50 w-full bg-white/85 border-b border-white/70 shadow-[0_20px_80px_-30px_rgba(219,112,147,0.75)] backdrop-blur-xl">
        <div className="mx-auto flex flex-wrap items-center justify-between gap-4 max-w-7xl px-6 py-6 rounded-full">
          <a href="#" className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="House of Hue logo" className="w-40 h-auto" />
            <span className="sr-only">House of Hue</span>
          </a>
          <div className="hidden md:flex space-x-8 text-sm tracking-[0.28em] uppercase text-[#a987b1]">
            <a href="#collection" className="hover:text-[#d68fc6] transition-colors duration-300">The Collection</a>
            <a href="#story" className="hover:text-[#d68fc6] transition-colors duration-300">Our Story</a>
            <a href="#studio" className="hover:text-[#d68fc6] transition-colors duration-300">The Studio</a>
          </div>
          <button className="rounded-full bg-gradient-to-r from-[#ffdee9] via-[#fff1d7] to-[#d8befb] px-7 py-3 text-sm tracking-[0.24em] uppercase text-[#6c3f6b] shadow-[0_18px_50px_-28px_rgba(219,112,147,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_26px_68px_-30px_rgba(219,112,147,0.95)]">
            Explore Art
          </button>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-24 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 space-y-8 max-w-xl">
          <span className="inline-flex items-center rounded-full bg-[#fff2f9] px-4 py-2 text-xs font-semibold tracking-[0.24em] uppercase text-[#b576a8]">
            Built by Two Sisters
          </span>

          <h1 className="text-5xl md:text-6xl font-serif font-semibold tracking-tight text-[#4d3854] leading-[1.05]">
            Thoughtful <span className="italic font-normal text-[#7f6381]">handmade art</span> shaped by memory.
          </h1>

          <p className="text-[#7f6481] text-lg leading-9 font-light">
            House of Hue is a collection of warmth and story—created to bring feeling into spaces, and to make room for beauty, nostalgia, and meaning in the homes people build.
          </p>

          <div className="pt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#collection" className="inline-flex items-center justify-center rounded-full bg-[#ffedf6] px-8 py-4 text-sm tracking-[0.24em] uppercase text-[#69405e] shadow-sm shadow-pink-100/70 transition-all duration-300 hover:bg-[#ffd8ee]">
              Browse Gallery
            </a>
            <a href="#story" className="inline-flex items-center text-sm tracking-[0.24em] uppercase text-[#a87ea8] border-b border-[#f3e3f0] pb-1 transition-colors duration-300 hover:text-[#d78ac8]">
              Read Our Story
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative mt-10 lg:mt-0 flex justify-center">
          <div className="relative w-80 h-[420px] overflow-hidden rounded-[3rem] border-[14px] border-white bg-gradient-to-br from-[#fff3f8] via-[#fff9e9] to-[#e7f5ff] shadow-2xl shadow-pink-100/60 transition-transform duration-700 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,190,223,0.45),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,241,204,0.7),_transparent_35%)]" />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-[#8c7291] font-serif italic text-sm">
              [ A soft painting showcase filled with pastel warmth ]
            </div>
          </div>

          <div className="absolute -bottom-10 -left-4 md:left-6 w-56 h-64 rounded-[1.75rem] bg-[#f8e2ff]/80 border-8 border-white shadow-xl shadow-fuchsia-100/70 transform -rotate-6 transition-transform duration-700 hover:rotate-0 hover:scale-105 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f8d9ff]/70 via-[#fff5d9]/60 to-[#d9ebff]/60 flex items-center justify-center p-4 text-center text-[#9d7fa7] font-serif italic text-xs">
              [ Detail shot ]
            </div>
          </div>
        </div>
      </main>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-6 pb-16">
        <div id="collection" className=""></div>
        <div className="rounded-2xl p-6 bg-white/60 backdrop-blur-sm border border-white/60 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif text-[#5d4260]">The Collection</h3>
            <a href="#collection" className="text-sm uppercase tracking-widest text-[#a87ea8]">View all</a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <img loading="lazy" onClick={() => openLightbox(i)} src={src} alt={`Artwork ${i + 1}`} className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox images={galleryImages} index={currentIndex} onClose={closeLightbox} onPrev={prev} onNext={next} />
      )}

      <section className="relative z-10 mx-auto max-w-5xl px-6 pt-6 pb-24">
        <div id="story" className=""></div>
        <div className="rounded-[2.5rem] border border-[#f4e5f3] bg-white/85 p-10 md:p-14 shadow-2xl shadow-[#f5c8ff]/25 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <span className="text-xs font-medium tracking-[0.28em] uppercase text-[#b575ab] bg-[#fff2f8] px-3 py-1.5 rounded-full">
                Our Story
              </span>
              <h2 className="mt-6 text-4xl md:text-5xl font-serif font-medium tracking-tight text-[#5d4260] leading-tight">
                A return to color, creativity, and the feeling of home.
              </h2>
            </div>

            <div className="space-y-6 text-[#6e5775] text-base md:text-lg leading-8">
              <p>
                House of Hue began long before it had a name. It began in classrooms, in sketchbooks, in the quiet pride of being our school art teacher’s favorites — the two sisters who were always chosen for inter-school art competitions, always carrying paints on our hands, and often bringing home awards for our school. Long before House of Hue became a brand, art was simply the language we knew best.
              </p>

              <p>
                Some of our earliest memories are made of color — making school projects with more excitement than homework, spending entire afternoons painting in silence, and finding joy in creating things together. Art was where our imagination lived, where our creativity bloomed, and where we found inspiration in each other. It was never just a hobby. It was the world we returned to, again and again.
              </p>

              <p>
                Our father would come home from work and find us sitting quietly, completely lost in our own little world of paints, paper, and ideas. He would laugh and ask when we ever studied, because all he ever saw us doing was arts and crafts. And yet, some of our happiest childhood memories were built in those ordinary moments — especially the ones that took us to stationery stores with him, walking through aisles of paper, brushes, and color as though we had entered the happiest place in the world.
              </p>

              <p>
                Our mother held our art just as closely. She would ask us to carry our painting pads back to our hometown so she could proudly show our work to relatives, and our cousins would wait for us to arrive so we could help them make their school projects. In so many ways, art became part of how our family knew us, celebrated us, and remembered us.
              </p>

              <p>
                As life moved forward, we did what many people do — we grew up, chose practical paths, and got busy. Somewhere between deadlines, long hours, and growing responsibilities, art slowly took a quieter place in our lives.
              </p>

              <p>
                But it never really left. It remained in the part of us that missed making things just for the joy of it. In the part of us that missed sitting in a room for hours, creating without urgency, talking without distraction, and simply enjoying each other’s company the way we always had. It remained in the part of us that still believed the most meaningful things we make are often the ones made with heart.
              </p>

              <p>
                House of Hue is our way of returning to that.
              </p>

              <p>
                Built by two sisters, House of Hue is a collection of thoughtful handmade art shaped by memory, warmth, and story — created to bring feeling into spaces, and to make room for beauty, nostalgia, and meaning in the homes people build.
              </p>

              <p className="font-semibold text-[#5d4260]">
                Because for us, art was never just something we made. It was always the place we came home to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-8">
        <div className="rounded-xl p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-white/60 shadow-md">
          <div className="flex flex-col items-center gap-6">
            <div className="text-xs md:text-sm text-[#6e5775] text-center">
              © {new Date().getFullYear()} House of Hue. All rights reserved.
            </div>

            <div className="flex items-center justify-center gap-6">
              <a href="https://instagram.com/the.houseofhue" target="_blank" rel="noopener noreferrer" className="text-[#8c7291] hover:text-[#d78ac8] transition-colors duration-300" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
              </a>

              <a href="https://www.pinterest.com/houseofhue" target="_blank" rel="noopener noreferrer" className="text-[#8c7291] hover:text-[#d78ac8] transition-colors duration-300" aria-label="Pinterest">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.383 0 0 5.383 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.223-.937 1.481-6.273 1.481-6.273s-.389-.779-.389-1.937c0-1.811 1.049-3.164 2.356-3.164 1.113 0 1.646.835 1.646 1.835 0 1.119-.713 2.794-.68 4.342-.193 1.634 1.163 2.969 3.452 2.969 4.144 0 6.926-3.882 6.926-9.499 0-3.732-2.521-6.842-7.073-6.842-5.2 0-8.639 3.582-8.639 7.831 0 1.52.396 2.647 1.125 3.495.098.128.11.239.082.365-.09.375-.291 1.171-.33 1.335-.06.252-.195.305-.451.184-2.694-1.365-4.169-5.103-4.169-8.205 0-4.874 4.33-10.535 12.946-10.535 6.828 0 12.133 4.614 12.133 10.77 0 7.447-4.315 13.436-10.841 13.436-2.173 0-4.211-.742-5.604-2.038l-1.525.915c-.585.35-1.022.031-1.15-.789-.147-.918-.556-2.214-.747-2.758-.121-.373-.443-.576-.821-.576z"/>
                </svg>
              </a>

              <a href="mailto:thehouseofhue2026@gmail.com" className="text-[#8c7291] hover:text-[#d78ac8] transition-colors duration-300" aria-label="Email">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
