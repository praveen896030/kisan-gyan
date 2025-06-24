
function toggleLanguage() {
  const hindi = document.querySelectorAll('.lang-hi');
  const english = document.querySelectorAll('.lang-en');
  hindi.forEach(el => el.style.display = el.style.display === 'none' ? '' : 'none');
  english.forEach(el => el.style.display = el.style.display === 'inline' ? 'none' : 'inline');
}
