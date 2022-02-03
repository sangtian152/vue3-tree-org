export function isFunction (func: any): boolean {
  return (typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]')
}

export function snapToGrid (grid: any[], pendingX: number, pendingY: number, scale = 1) {
  const x = Math.round((pendingX / scale) / grid[0]) * grid[0]
  const y = Math.round((pendingY / scale) / grid[1]) * grid[1]

  return [x, y]
}

export function getSize (el: HTMLElement): number[] {
  const rect = el.getBoundingClientRect()

  return [
    rect.width,
    rect.height
  ]
}

export function restrictToBounds (value: any, min: any, max: any) {
  if (min !== null && value < min) {
    return min
  }

  if (max !== null && max < value) {
    return max
  }

  return value
}
