import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { env } from 'node:process'

const { APP_PORT = '3001', DEVTOOLS_PORT = '42067' } = env

const ROOT = path.resolve(__dirname)

export default defineConfig({
  plugins: [
    devtools({
      eventBusConfig: {
        port: Number(DEVTOOLS_PORT),
      },
    }),
    tsconfigPaths(),
    tailwindcss(),
    tanstackRouter(),
    viteReact({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': `${ROOT}/src`,
    },
  },
  server: {
    port: Number(APP_PORT),
  },
})
