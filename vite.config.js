import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        home: resolve(import.meta.dirname, 'home.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        work: resolve(import.meta.dirname, 'work.html'),
        workDetail: resolve(import.meta.dirname, 'work-detail.html'),
        careers: resolve(import.meta.dirname, 'careers.html'),
        careerDetail: resolve(import.meta.dirname, 'career-detail.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
        services: resolve(import.meta.dirname, 'services.html'),
        servicesPortfolio: resolve(import.meta.dirname, 'services-portfolio.html'),
        designBuild: resolve(import.meta.dirname, 'design-build.html'),
        predevelopment: resolve(import.meta.dirname, 'predevelopment.html'),
        preconstruction: resolve(import.meta.dirname, 'preconstruction.html'),
        residential: resolve(import.meta.dirname, 'residential.html'),
      },
    },
  },
})
