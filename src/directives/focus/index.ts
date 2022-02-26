interface IBinding {
  value: any;
}
export default {
  beforeMount (el: HTMLElement, { value }:IBinding):void {
    if (value) {
      el.focus()
    }
  }
}
