import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eduardomacetas.github.io',
  integrations: [tailwind()],
});