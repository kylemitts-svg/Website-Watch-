
function openLightbox(src) {
  const lb = document.querySelector('.lightbox');
  const img = lb.querySelector('img');
  img.src = src;
  lb.classList.add('show');
  lb.setAttribute('tabindex', '-1');
  lb.focus();
}

function closeLightbox(e) {
  const lb = document.querySelector('.lightbox');
  if (e.target === lb || e.key === 'Escape') {
    lb.classList.remove('show');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const lb = document.querySelector('.lightbox');
  if (lb) {
    lb.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', closeLightbox);
  }
});
