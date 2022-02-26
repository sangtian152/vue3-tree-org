export const isObject = function (arg: unknown): boolean {
  return Object.prototype.toString.call(arg) === '[object Object]'
}

export const isString = function (str: unknown): boolean {
  return typeof str === 'string'
}

export const isNumber = function (num: unknown): boolean {
  return typeof num === 'number'
}

export const fromPairs = function (pairs:any[][]): Record<string, unknown> {
  let index = -1; const // 循环索引
    length = pairs ? pairs.length : 0; const // 键值对数组的长度
    result = {}// 结果对象

  while (++index < length) { // 循环并给结果对象加入属性
    const pair = pairs[index]
    result[pair[0]] = pair[1]
  }
  return result
}
