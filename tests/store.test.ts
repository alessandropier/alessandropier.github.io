import { test, expect } from 'bun:test';
import { createUiStore } from '../src/stores/ui';

test('default state matches the static markup defaults', () => {
  const s = createUiStore().getState();
  expect(s.activePage).toBe('about');
  expect(s.modalOpen).toBe(false);
  expect(s.modalContent).toBeNull();
  expect(s.activeFilter).toBe('all');
  expect(s.selectLabel).toBe('Select category');
  expect(s.selectOpen).toBe(false);
  expect(s.formValid).toBe(false);
});

test('setActivePage updates the active page', () => {
  const store = createUiStore();
  store.getState().setActivePage('portfolio');
  expect(store.getState().activePage).toBe('portfolio');
});

test('openModal sets content and opens; closeModal closes but keeps content', () => {
  const store = createUiStore();
  const content = { imgSrc: 'a.png', imgAlt: 'A', title: 'A', textHtml: '<p>hi</p>' };
  store.getState().openModal(content);
  expect(store.getState().modalOpen).toBe(true);
  expect(store.getState().modalContent).toEqual(content);
  store.getState().closeModal();
  expect(store.getState().modalOpen).toBe(false);
  expect(store.getState().modalContent).toEqual(content);
});

test('setFilter lowercases the active filter and stores the label', () => {
  const store = createUiStore();
  store.getState().setFilter('Web design');
  expect(store.getState().activeFilter).toBe('web design');
  expect(store.getState().selectLabel).toBe('Web design');
});

test('toggleSelect flips selectOpen', () => {
  const store = createUiStore();
  store.getState().toggleSelect();
  expect(store.getState().selectOpen).toBe(true);
  store.getState().toggleSelect();
  expect(store.getState().selectOpen).toBe(false);
});

test('setFormValid sets validity', () => {
  const store = createUiStore();
  store.getState().setFormValid(true);
  expect(store.getState().formValid).toBe(true);
});
