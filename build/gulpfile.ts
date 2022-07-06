import fs from 'fs';
import { src, dest, series, task } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from "gulp-rename";
import { resolvePath } from './utils/path'
import { buildFull } from './rollup.config'
// 将 docs/.vuepress/dist目录 移动到 dist目录
function moveDir() {
  return new Promise((resolve, reject) => {
    const sourcePath = resolvePath('docs/.vuepress/dist')
    const targetPath = resolvePath('dist')
    fs.rename(sourcePath, targetPath, (err) => {
      if (err){
        reject(err);
        return
      } 
      console.log('Rename complete!');
      resolve('Rename complete!')
    });
  })
}
function copyIcon() {
  const sourcePath = resolvePath('src/styles/iconfont/*')
  const targetPath = resolvePath('lib/iconfont')
  return src(sourcePath).pipe(dest(targetPath))
}
// 构建scss
function buildscss(){
  const sass = gulpSass(dartSass)
  const sourcePath = resolvePath('src/styles/*.scss')
  const targetPath = resolvePath('lib')
  return src(sourcePath)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('vue3-tree-org.css'))
    .pipe(dest(targetPath))
};
const build = series(buildFull, buildscss, copyIcon, moveDir)
export default build