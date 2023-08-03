import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server: {
      port: parseInt(env.PORT),
    },
    resolve: {
      alias: {
        '@api': path.resolve(__dirname, 'src/api'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@language': path.resolve(__dirname, 'src/language'),
        '@layout': path.resolve(__dirname, 'src/layout'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@navigation': path.resolve(__dirname, 'src/navigation'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@utilities': path.resolve(__dirname, 'src/utilities'),
      },
    },
  };
});
