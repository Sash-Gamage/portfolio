tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#4d774e',
          secondary: '#000000',
          accent: '#000000',
          light: '#000000'
        }
      }
    }
  }

  // Initialize AOS with updated settings
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    mirror: true,
    easing: 'ease-in-out'
  });
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  
  // Add fade-in animation on scroll
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in').forEach((element) => {
      observer.observe(element);
  });