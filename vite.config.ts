import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'

dotenv.config() // Carregar variáveis de ambiente do arquivo .env

const envKeys = Object.keys(process.env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(process.env[next])
  return prev
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    ...envKeys,
  },
})
