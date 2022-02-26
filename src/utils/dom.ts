import { isFunction } from './fns'

export function matchesSelectorToParentElements (el: Element, selector:string, baseNode: Element):boolean {
  let node = el as Node

  const matchesSelectorFunc = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector',
    'oMatchesSelector'
  ].find(func => node && isFunction(node[func])) || ''

  if (!isFunction(node[matchesSelectorFunc])) return false

  do {
    if (node[matchesSelectorFunc](selector)) return true
    if (node === baseNode) return false
    node = node.parentNode as Node
  } while (node)

  return false
}

export function getComputedSize ($el: HTMLElement):number[] {
  const style = window.getComputedStyle($el)

  return [
    parseFloat(style.getPropertyValue('width')),
    parseFloat(style.getPropertyValue('height'))
  ]
}
export const addEvent = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

/* istanbul ignore next */
export const removeEvent = function (
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false
): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}
