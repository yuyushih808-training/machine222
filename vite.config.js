import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署時，請將 'equipment-booking-system' 改成你的 repo 名稱
  base: '/equipment-booking-system/',
})
