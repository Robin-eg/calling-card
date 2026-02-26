// Slider Navigation
(() => {
  const track = document.getElementById('hTrack');
  const btns = document.querySelectorAll('.hslider__btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = Number(btn.dataset.dir || 1);
      const card = track?.querySelector('.card');
      const gap = 14;
      // offsetWidth gibt die tatsächliche Breite zurück – klappt auch auf Mobile
      const amount = (card?.offsetWidth || 280) + gap;
      track?.scrollBy({ left: dir * amount, behavior: 'smooth' });
    });
  });

  // Swipe-Support für Touch-Geräte
  if (!track) return;
  let startX = 0;
  let isDragging = false;

  track.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  }, { passive: true });

  track.addEventListener('touchend', e => {
    if (!isDragging) return;
    const diff = startX - e.changedTouches[0].clientX;
    // Kleiner Threshold damit accidentelle Swipes ignoriert werden
    if (Math.abs(diff) > 40) {
      const card = track.querySelector('.card');
      const amount = (card?.offsetWidth || 280) + 14;
      track.scrollBy({ left: diff > 0 ? amount : -amount, behavior: 'smooth' });
    }
    isDragging = false;
  }, { passive: true });
})();

