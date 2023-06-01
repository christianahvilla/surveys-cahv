import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react() as any],
    test: {
      environment: 'jsdom',
      globals: true,
      coverage: {
        reporter: ['text', 'json', 'html'],
      },
      setupFiles: ['setupTest.ts'],
      exclude: ['node_modules', 'build'],
    },
  });
};
