type IBinding = {
  value: any;
}
export default {
  mounted (el: HTMLElement, { value }:IBinding):void {
    if (value) {
      el.focus()
    }
  },
  updated (el: HTMLElement, { value }:IBinding):void {
    if (value) {
      el.focus()
    }
  }
}
