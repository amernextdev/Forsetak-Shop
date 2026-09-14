import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',    
    assetsDir: 'assets', 
    sourcemap: false,    
    minify: 'terser',    
    
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),

        // 📁 قائمة الصفحات الفرعية (قم بنسخ وتعديل هذه الأسطر لكل صفحة جديدة):
        // pageName: resolve(import.meta.dirname, 'src/pages/folder-name/index.html'),
      },
      
      // إعداد تنظيمي اختياري: لفصل مخرجات ملفات الـ JS والـ CSS داخل مجلد assets بنظافة
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
  },
})

