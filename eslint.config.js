import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintPluginVue from 'eslint-plugin-vue';
import typescriptEslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

export default defineConfig([
  {
    ignores: ['**/dist', '**/cache'],
  },
  {
    files: ['site/.vitepress/**/*.{ts,vue}'],
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs['flat/recommended'],
    ],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    rules: {
      '@/semi': ['error'],
      'dot-location': ['error', 'property'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-trailing-spaces': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off'
    }
  },
]);
