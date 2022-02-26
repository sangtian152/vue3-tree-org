interface IGrid {
  deltaX: number;
  deltaY: number;
}

export function isFunction (func: any): boolean {
  return (typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]')
}

export function snapToGrid (grid: any[], pendingX: number, pendingY: number, scale = 1):IGrid {
  const deltaX = Math.round((pendingX / scale) / grid[0]) * grid[0]
  const deltaY = Math.round((pendingY / scale) / grid[1]) * grid[1]

  return { deltaX, deltaY }
}

export function getSize (el: HTMLElement): number[] {
  const rect = el.getBoundingClientRect()

  return [
    rect.width,
    rect.height
  ]
}

export function restrictToBounds (value: number, min: number, max: number): number {
  if (value < min) {
    return min
  }

  if (max < value) {
    return max
  }

  return value
}
