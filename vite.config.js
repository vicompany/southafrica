import compress from 'vite-plugin-compress';
import path from 'path';
import postcssPresetEnv from 'postcss-preset-env';

const DIR_ROOT = __dirname;

export default {
  publicDir: path.resolve(DIR_ROOT, 'public'),
  root: path.resolve(DIR_ROOT, 'src'),

  build: {
    outDir: path.resolve(DIR_ROOT, 'dist'),
  },

  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 1,
        }),
      ],
    },
  },

  plugins: [
    compress({
      brotli: false,
      quality: 9,
    }),
  ],
}
