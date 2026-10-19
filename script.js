const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Menüyü kapat' : 'Menüyü aç');
  });
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector('#appointment-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.querySelector('#customer-name').value.trim();
    const phone = document.querySelector('#customer-phone').value.trim();
    const service = document.querySelector('#service-type').value;
    const message = document.querySelector('#customer-message').value.trim();
    const text = `Merhaba, BSM Yıldırım Soğutma Teknik Servis için randevu talep ediyorum.\nAd: ${name}\nTelefon: ${phone}\nHizmet: ${service}\nAçıklama: ${message || 'Belirtilmedi'}`;
    window.open(`https://wa.me/905057068598?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  });
}
