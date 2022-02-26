/* eslint-disable no-console */
import { isString } from '@/utils/utils'

const log = {
  print: (text: string | number | Record<string, unknown>, type: string, back: boolean) => isString(type) || typeof back === 'boolean',
  pretty: (title: string, text: string, type?: string) => (isString(text) && isString(title)) || typeof type === 'string',
  primary: (text: string, back?: boolean) => isString(text) || typeof back === 'boolean',
  success: (text: string, back?: boolean) => isString(text) || typeof back === 'boolean',
  info: (text: string, back?: boolean) => isString(text) || typeof back === 'boolean',
  warning: (text: string, back?: boolean) => isString(text) || typeof back === 'boolean',
  danger: (text: string, back?: boolean) => isString(text) || typeof back === 'boolean'
}
/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
export function typeColor (type = 'default'):string {
  let color = ''
  switch (type) {
    case 'primary':
      color = '#2d8cf0'
      break
    case 'success':
      color = '#19be6b'
      break
    case 'info':
      color = '#909399'
      break
    case 'warning':
      color = '#ff9900'
      break
    case 'danger':
      color = '#ff4d4f'
      break
    case 'default':
      color = '#35495E'
      break
    default:
      color = type
      break
  }
  return color
}

log.print = function (text: string | number | Record<string, unknown>, type = 'default', back = false) {
  if (typeof text === 'object') { // 如果是对象则调用打印对象方式
    console.dir(text)
    return true
  }
  if (back) { // 如果是打印带背景图的
    console.log(
      `%c ${text} `,
      `background:${typeColor(type)}; padding: 2px; border-radius: 4px;color: #fff;`
    )
  } else {
    console.log(
      `%c ${text} `,
      `color: ${typeColor(type)};`
    )
  }
  return true
}
// 漂亮的
log.pretty = function (title: string, text: string, type = 'primary') {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
    'background:transparent'
  )
  return true
}

log.primary = function (text: string, back = false) {
  this.print && this.print(text, 'primary', back)
  return true
}
log.success = function (text: string, back = false) {
  this.print && this.print(text, 'success', back)
  return true
}
log.info = function (text: string, back = false) {
  this.print && this.print(text, 'info', back)
  return true
}
log.warning = function (text: string, back = false) {
  this.print && this.print(text, 'warning', back)
  return true
}
log.danger = function (text: string, back = false) {
  this.print && this.print(text, 'danger', back)
  return true
}

export default log
