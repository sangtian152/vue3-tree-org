// import vue from 'rollup-plugin-vue'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')

export default [
  {
    input: path.resolve(__dirname, './src/index.ts'),
    output: [
      {
        format: 'es',
        file: pkg.module,
      }
    ],
    plugins: [
      terser(),
      json(),
      nodeResolve(),
      // commonjs(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            allowSyntheticDefaultImports: true
          },
          include: [
            'src/**/*',
            'shims-vue.d.ts',
          ],
          exclude: [
            'node_modules',
            'src/**/__tests__/*',
          ],
        },
        abortOnError: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id)
        || deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]