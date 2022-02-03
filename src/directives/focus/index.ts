interface IBinding {
  value: any;
}
export default {
  beforeMount (el: HTMLElement, { value }:IBinding) {
    if (value) {
    	el.focus()
    }
  }
}
