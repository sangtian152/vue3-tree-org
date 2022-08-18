export const stopClick = (function () {
  let stop = false
  return {
    get: (): boolean => stop,
    set: (val: boolean): void => { stop = val }
  }
})()
