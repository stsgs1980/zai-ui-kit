import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    components: 'src/components/index.ts',
    theme: 'src/theme/index.ts',
    utils: 'src/utils/index.ts',
  },
  format: ['esm'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: true,
  external: ['react', 'react-dom', 'tailwindcss'],
  treeshake: true,
  minify: false,
  outDir: 'dist',
})
