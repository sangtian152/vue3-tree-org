interface IGrid {
    deltaX: number;
    deltaY: number;
}
export declare function isFunction(func: any): boolean;
export declare function snapToGrid(grid: any[], pendingX: number, pendingY: number, scale?: number): IGrid;
export declare function getSize(el: HTMLElement): number[];
export declare function restrictToBounds(value: number, min: number, max: number): number;
export {};
