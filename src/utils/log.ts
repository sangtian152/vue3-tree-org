interface ILog {
  print: (text:string | number | Record<string, unknown>, type:string, back:boolean) => void;
  pretty: (title:string, text:string, type?:string) => void;
  primary: (text:string, back?:boolean) => void;
  success: (text:string, back?:boolean) => void;
  info: (text:string, back?:boolean) => void;
  warning: (text:string, back?:boolean) => void;
  danger: (text:string, back?:boolean) => void;
}

const log:ILog = {
  print: function (text: string | number | Record<string, unknown>, type: string, back: boolean): void {
    throw new Error('Function not implemented.')
  },
  pretty: function (title: string, text: string, type?: string): void {
    throw new Error('Function not implemented.')
  },
  primary: function (text: string, back?: boolean): void {
    throw new Error('Function not implemented.')
  },
  success: function (text: string, back?: boolean): void {
    throw new Error('Function not implemented.')
  },
  info: function (text: string, back?: boolean): void {
    throw new Error('Function not implemented.')
  },
  warning: function (text: string, back?: boolean): void {
    throw new Error('Function not implemented.')
  },
  danger: function (text: string, back?: boolean): void {
    throw new Error('Function not implemented.')
  }
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
    return
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
}
// 漂亮的
log.pretty = function (title: string, text: string, type = 'primary') {
  console.log(
    `%c ${title} %c ${text} %c`,
    `background:${typeColor(type)};border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 4px 0 0 4px; color: #fff;`,
    `border:1px solid ${typeColor(type)}; padding: 1px; border-radius: 0 4px 4px 0; color: ${typeColor(type)};`,
    'background:transparent'
  )
}

log.primary = function (text: string, back = false) {
  this.print && this.print(text, 'primary', back)
}
log.success = function (text: string, back = false) {
  this.print && this.print(text, 'success', back)
}
log.info = function (text: string, back = false) {
  this.print && this.print(text, 'info', back)
}
log.warning = function (text: string, back = false) {
  this.print && this.print(text, 'warning', back)
}
log.danger = function (text: string, back = false) {
  this.print && this.print(text, 'danger', back)
}

export default log
