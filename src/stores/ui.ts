import { createStore } from 'zustand/vanilla';
import type { PageId } from '../data/types';

export interface ModalContent {
  imgSrc: string;
  imgAlt: string;
  title: string;
  textHtml: string;
}

export interface UiState {
  activePage: PageId;
  modalOpen: boolean;
  modalContent: ModalContent | null;
  activeFilter: string;
  selectLabel: string;
  selectOpen: boolean;
  formValid: boolean;
  setActivePage: (page: PageId) => void;
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
  setFilter: (label: string) => void;
  toggleSelect: () => void;
  setFormValid: (valid: boolean) => void;
}

export const createUiStore = () =>
  createStore<UiState>((set) => ({
    activePage: 'about',
    modalOpen: false,
    modalContent: null,
    activeFilter: 'all',
    selectLabel: 'Select category',
    selectOpen: false,
    formValid: false,
    setActivePage: (page) => set({ activePage: page }),
    openModal: (content) => set({ modalOpen: true, modalContent: content }),
    closeModal: () => set({ modalOpen: false }),
    setFilter: (label) => set({ activeFilter: label.toLowerCase(), selectLabel: label }),
    toggleSelect: () => set((state) => ({ selectOpen: !state.selectOpen })),
    setFormValid: (valid) => set({ formValid: valid }),
  }));

export const uiStore = createUiStore();
