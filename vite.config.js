import { resolve } from 'path'
import { defineConfig } from "vite"
import legacy from '@vitejs/plugin-legacy'
import inject from '@rollup/plugin-inject'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    plugins: [
        inject({
          $     : 'jquery/dist/jquery.slim.min.js',
          jQuery: 'jquery/dist/jquery.slim.min.js',
          axios : 'axios'
        }),
        legacy({
          targets: ['defaults', 'not IE 11'],
        }),
    ],
    css: {
      postcss: {
        plugins: [
          autoprefixer({grid: true})
        ],
      }
    },
    build: {
        rollupOptions: {
          input: {
            install: resolve(__dirname, 'pages/install/index.html'),
            // main: resolve(__dirname, 'pages/home/index.html'),
            // 404: resolve(__dirname, 'pages/404/index.html'),
          },
          output: {
            assetFileNames: (assetInfo) => {
              let extType = assetInfo.name.split('.').at(1);
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = 'img';
              }
              return `assets/${extType}/[name]-[hash][extname]`;
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
          },
        },
    },
})