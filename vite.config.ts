import { defineConfig } from 'vite-plus'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  test: {
    projects: [
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['./app/tests/**/*.test.ts'],
          environment: 'nuxt',
        },
      }),
    ],
  },
  staged: {
    '*.{js,ts,tsx,vue}': 'vp check --fix',
  },
  fmt: {
    singleQuote: true,
    semi: false,
    sortPackageJson: true,
  },
  lint: {
    plugins: ['vue', 'eslint', 'typescript', 'oxc', 'node', 'vitest'],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'no-debugger': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    options: { typeAware: true, typeCheck: true },
    ignorePatterns: ['dist/**', '.agents/**', '.codex/**', '.data/**', '.github/**'],
  },
})
