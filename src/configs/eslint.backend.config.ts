import globals from 'globals';
import {defineConfig} from 'eslint/config';
import baseEslintConfig from './base.eslint.config.js';

export default defineConfig({
  extends: [...baseEslintConfig.extends],
  languageOptions: {
    ...baseEslintConfig.languageOptions,
    globals: {...baseEslintConfig.languageOptions.globals, ...globals.node},
    sourceType: 'commonjs'
  },
  rules: {
    ...baseEslintConfig.rules
  }
});
