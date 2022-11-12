const gNavBtn = document.getElementById('js-gNavBtn');

gNavBtn.addEventListener('click', (e) => {
  document.documentElement.classList.toggle('is-gNavOpen');
});
