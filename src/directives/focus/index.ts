interface IBinding {
  value: any;
}
export default {
  mounted: function (el: HTMLElement, { value }:IBinding):void {
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
