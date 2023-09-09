const initApp = () => {
  const hamburgerButton = document.getElementById('hamburger-btn');
  const mobileNavigation = document.getElementById('mobile-nav');

  hamburgerButton.addEventListener('click', () => {
    mobileNavigation.classList.toggle('hidden');
  });

  mobileNavigation.addEventListener('click', () => {
    mobileNavigation.classList.toggle('hidden');
  });
};

window.addEventListener('scroll', () => {
  const navigationBar = document.querySelector('.navigation-bar');

  const verticalScrollPx = window.scrollY;

  if (verticalScrollPx > 100) {
    navigationBar.classList.remove('py-6')
    navigationBar.classList.add('py-4');
  } else {
    navigationBar.classList.add('py-6');
    navigationBar.classList.remove('py-4')
  }
});

document.addEventListener('DOMContentLoaded', initApp);
