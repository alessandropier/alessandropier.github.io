import { uiStore } from '../stores/ui';
import type { UiState } from '../stores/ui';

const toggleActive = (el: Element | null, on: boolean): void => {
  el?.classList.toggle('active', on);
};

const wireSidebar = (): void => {
  const sidebar = document.querySelector('[data-sidebar]');
  const sidebarBtn = document.querySelector('[data-sidebar-btn]');
  sidebarBtn?.addEventListener('click', () => sidebar?.classList.toggle('active'));
};

const wireNavigation = (): void => {
  const links = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-nav-link]'));
  links.forEach((link) => {
    link.addEventListener('click', () => {
      uiStore.getState().setActivePage(link.innerHTML.trim().toLowerCase() as UiState['activePage']);
      window.scrollTo(0, 0);
    });
  });
};

const wireTestimonials = (): void => {
  const items = Array.from(document.querySelectorAll('[data-testimonials-item]'));
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const avatar = item.querySelector<HTMLImageElement>('[data-testimonials-avatar]');
      const title = item.querySelector('[data-testimonials-title]');
      const text = item.querySelector('[data-testimonials-text]');
      uiStore.getState().openModal({
        imgSrc: avatar?.src ?? '',
        imgAlt: avatar?.alt ?? '',
        title: title?.innerHTML ?? '',
        textHtml: text?.innerHTML ?? '',
      });
    });
  });
  document.querySelector('[data-modal-close-btn]')?.addEventListener('click', () => uiStore.getState().closeModal());
  document.querySelector('[data-overlay]')?.addEventListener('click', () => uiStore.getState().closeModal());
};

const wireFilter = (): void => {
  const select = document.querySelector('[data-select]');
  select?.addEventListener('click', () => uiStore.getState().toggleSelect());

  document.querySelectorAll<HTMLButtonElement>('[data-select-item]').forEach((item) => {
    item.addEventListener('click', () => {
      uiStore.getState().setFilter(item.innerText);
      uiStore.getState().toggleSelect();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-filter-btn]').forEach((btn) => {
    btn.addEventListener('click', () => uiStore.getState().setFilter(btn.innerText));
  });
};

const wireForm = (): void => {
  const form = document.querySelector<HTMLFormElement>('[data-form]');
  const inputs = Array.from(document.querySelectorAll('[data-form-input]'));
  inputs.forEach((input) => {
    input.addEventListener('input', () => uiStore.getState().setFormValid(Boolean(form?.checkValidity())));
  });
};

const render = (state: UiState): void => {
  document.querySelectorAll<HTMLElement>('[data-page]').forEach((page) => {
    toggleActive(page, page.dataset.page === state.activePage);
  });
  document.querySelectorAll<HTMLButtonElement>('[data-nav-link]').forEach((link) => {
    toggleActive(link, link.innerHTML.trim().toLowerCase() === state.activePage);
  });

  const modal = document.querySelector('[data-modal-container]');
  const overlay = document.querySelector('[data-overlay]');
  toggleActive(modal, state.modalOpen);
  toggleActive(overlay, state.modalOpen);
  if (state.modalContent) {
    const img = document.querySelector<HTMLImageElement>('[data-modal-img]');
    const title = document.querySelector('[data-modal-title]');
    const text = document.querySelector('[data-modal-text]');
    if (img) {
      img.src = state.modalContent.imgSrc;
      img.alt = state.modalContent.imgAlt;
    }
    if (title) title.innerHTML = state.modalContent.title;
    if (text) text.innerHTML = state.modalContent.textHtml;
  }

  document.querySelectorAll<HTMLElement>('[data-filter-item]').forEach((item) => {
    const matches = state.activeFilter === 'all' || state.activeFilter === item.dataset.category;
    toggleActive(item, matches);
  });
  document.querySelectorAll<HTMLButtonElement>('[data-filter-btn]').forEach((btn) => {
    toggleActive(btn, btn.innerText.toLowerCase() === state.activeFilter);
  });

  const select = document.querySelector('[data-select]');
  toggleActive(select, state.selectOpen);
  const selectValue = document.querySelector('[data-selecct-value]');
  if (selectValue) selectValue.textContent = state.selectLabel;

  const formBtn = document.querySelector('[data-form-btn]');
  if (formBtn) {
    if (state.formValid) formBtn.removeAttribute('disabled');
    else formBtn.setAttribute('disabled', '');
  }
};

const init = (): void => {
  wireSidebar();
  wireNavigation();
  wireTestimonials();
  wireFilter();
  wireForm();
  const PAGES: UiState['activePage'][] = ['about', 'resume', 'portfolio', 'blog', 'contact'];
  const hash = window.location.hash.replace('#', '') as UiState['activePage'];
  if (PAGES.includes(hash)) uiStore.getState().setActivePage(hash);
  uiStore.subscribe(render);
  render(uiStore.getState());
};

init();
