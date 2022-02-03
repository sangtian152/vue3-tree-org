export const isObject = function (arg: any): boolean {
  return Object.prototype.toString.call(arg) === '[object Object]'
}
