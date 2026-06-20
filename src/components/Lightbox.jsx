import React, { useEffect, useRef } from 'react';

export default function Lightbox({ images = [], index = 0, onClose, onPrev, onNext }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  const src = images[index];

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50; // px
    if (dx > threshold) {
      onNext();
    } else if (dx < -threshold) {
      onPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className="absolute top-6 right-6 text-white bg-black/30 rounded-full p-2" onClick={onClose} aria-label="Close">✕</button>

      <button className="absolute left-6 text-white bg-black/30 rounded-full p-2" onClick={onPrev} aria-label="Previous">‹</button>
      <div className="max-w-[90vw] max-h-[90vh] p-4">
        <img src={src} alt={`Artwork ${index + 1}`} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
      </div>
      <button className="absolute right-6 text-white bg-black/30 rounded-full p-2" onClick={onNext} aria-label="Next">›</button>
    </div>
  );
}
