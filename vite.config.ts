import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/static/icons')],
      symbolId: 'icon-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@pages': path.resolve(process.cwd(), 'src/pages'),
      '@utils': path.resolve(process.cwd(), 'src/utils'),
      '@static': path.resolve(process.cwd(), 'src/static'),
      '@store': path.resolve(process.cwd(), 'src/store'),
    },
  },
})
