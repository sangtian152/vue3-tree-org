export declare function matchesSelectorToParentElements(el: Element, selector: string, baseNode: Element): boolean;
export declare function getComputedSize($el: HTMLElement): number[];
export declare const addEvent: (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
export declare const removeEvent: (element: HTMLElement | Document | Window, event: string, handler: EventListenerOrEventListenerObject, useCapture?: boolean) => void;
