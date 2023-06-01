import '@testing-library/jest-dom';
import { afterEach, beforeEach, vi } from 'vitest';

const { ResizeObserver } = window;

beforeEach(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  vi.useRealTimers();
  vi.restoreAllMocks();
});
