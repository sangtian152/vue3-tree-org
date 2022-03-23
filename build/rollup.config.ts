import { resolvePath } from './utils/path'
import { rollup } from 'rollup'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')

export const buildFull =  async function () {
  const bundle = await rollup({
    input: resolvePath('src/index.ts'),
    plugins: [
      terser(),
      json(),
      nodeResolve(),
      // commonjs(),
      vue({
        target: 'browser',
        exposeFilename: false,
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            allowSyntheticDefaultImports: true
          },
          include: [
            resolvePath('src/**/*'),
            resolvePath('shims-vue.d.ts'),
          ],
          exclude: [
            resolvePath('node_modules'),
            resolvePath('src/**/__tests__/*'),
          ],
        },
        abortOnError: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id)
        || deps.some(k => new RegExp('^' + k).test(id))
    }
  });

  await bundle.write({
    format: 'es',
    file: resolvePath(pkg.module),
  });
};
