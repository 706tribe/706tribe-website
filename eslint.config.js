import eslintPluginAstro from 'eslint-plugin-astro';
import eslint from '@eslint/js';

export default [
    eslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
      rules: {
        // override/add rules settings here, such as:
      }
    }
];