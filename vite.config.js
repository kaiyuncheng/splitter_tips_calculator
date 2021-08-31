import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import svgrPlugin from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/splitter_tips_calculator/',
  plugins: [reactRefresh(), svgrPlugin()]
})
