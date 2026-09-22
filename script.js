const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const form = document.querySelector('#contact-form');
const status = document.querySelector('.form-status');
const mobileMenu = window.matchMedia('(max-width: 820px)');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const themeLabel = themeToggle.querySelector('.theme-label');
const themeStorageKey = 'portfolio-theme';

function updateThemeControl(theme) {
  const isDark = theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeIcon.textContent = isDark ? '☼' : '☾';
  themeLabel.textContent = isDark ? 'Light' : 'Dark';
}

function setTheme(theme, persist = false) {
  document.documentElement.dataset.theme = theme;
  updateThemeControl(theme);
  if (persist) localStorage.setItem(themeStorageKey, theme);
}

const savedTheme = localStorage.getItem(themeStorageKey);
setTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme, true);
});

systemTheme.addEventListener('change', (event) => {
  if (!localStorage.getItem(themeStorageKey)) setTheme(event.matches ? 'dark' : 'light');
});

function closeMenu() {
  navigation.classList.remove('open');
  navigation.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation menu');
}

function syncMenuState() {
  if (mobileMenu.matches) {
    closeMenu();
  } else {
    navigation.setAttribute('aria-hidden', 'false');
  }
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  navigation.setAttribute('aria-hidden', String(!isOpen));
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  if (mobileMenu.matches) closeMenu();
}));

mobileMenu.addEventListener('change', syncMenuState);
syncMenuState();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name').trim();
  const email = data.get('email').trim();
  const message = data.get('message').trim();

  if (!name || !email || !message) {
    status.textContent = 'Please complete all fields before sending.';
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    status.textContent = 'Please enter a valid email address.';
    return;
  }

  status.textContent = `Thanks, ${name}! Your message is ready to send.`;
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
