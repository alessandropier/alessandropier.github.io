const sidebar = document.querySelector('[data-sidebar]');
document
  .querySelector('[data-sidebar-btn]')
  ?.addEventListener('click', () => sidebar?.classList.toggle('active'));

document.querySelectorAll<HTMLButtonElement>('[data-nav-link]').forEach((link) => {
  link.addEventListener('click', () => {
    window.location.href = `/#${link.innerHTML.trim().toLowerCase()}`;
  });
});
