import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), glsl()],
});
