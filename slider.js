// KA alter irgend en dude vo StackOverflow seit da funkt so
(() => {
  const track = document.getElementById('hTrack');
  const btns = document.querySelectorAll('.hslider__btn');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = Number(btn.dataset.dir || 1);
      const card = track?.querySelector('.card');
      const amount = (card?.offsetWidth || 10) + 14;
      track?.scrollBy({ left: dir * amount, behavior: 'smooth' });
    });
  });
})();

