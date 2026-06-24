import './styles.css';

const revealTargets = document.querySelectorAll('.section-card, .timeline-item, .comparison-card, .use-list li');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach(target => observer.observe(target));
