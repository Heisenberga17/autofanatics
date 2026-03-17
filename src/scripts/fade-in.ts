// Global IntersectionObserver for [data-fade] elements
// Adds .is-visible class when element enters viewport
// Supports data-fade-delay="200" for staggered animations
function initFadeIn() {
  const elements = document.querySelectorAll<HTMLElement>('[data-fade]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.fadeDelay || '0', 10);
          if (delay > 0) {
            setTimeout(() => el.classList.add('is-visible'), delay);
          } else {
            el.classList.add('is-visible');
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

// Run on initial load
initFadeIn();

// Re-run after view transitions (Astro)
document.addEventListener('astro:page-load', initFadeIn);
