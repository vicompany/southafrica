import path from 'path';

const DIR_ROOT = __dirname;

export default {
  root: path.resolve(DIR_ROOT, 'src'),
  build: {
    outDir: path.resolve(DIR_ROOT, 'docs'),
  },
}
