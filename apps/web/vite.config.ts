import path from 'node:path'
import { env } from 'node:process'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const { APP_PORT = '3002', DEVTOOLS_PORT = '42069' } = env

const ROOT = path.resolve(__dirname)

export default defineConfig({
  plugins: [
    devtools({
      eventBusConfig: {
        port: Number(DEVTOOLS_PORT),
      },
    }),
    tsconfigPaths({
      projects: [`${ROOT}/tsconfig.json`],
    }),
    tailwindcss(),
    tanstackStart(),
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
