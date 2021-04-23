import path from 'path';
import postcssPresetEnv from 'postcss-preset-env';

const DIR_ROOT = __dirname;

export default {
  publicDir: path.resolve(DIR_ROOT, 'public'),
  root: path.resolve(DIR_ROOT, 'src'),

  build: {
    outDir: path.resolve(DIR_ROOT, 'docs'),
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
}
