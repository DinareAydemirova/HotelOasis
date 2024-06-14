import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/gallery":{
        target:"http://localhost:3000"
      },
      "/rooms":{
        target:"http://localhost:3000"
      },
      "/team":{
        target:"http://localhost:3000"
      }
    }
  }
})
