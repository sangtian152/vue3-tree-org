import type { INode } from '@/utils/types';
export declare const renderNode: (h: any, data: INode, context: any) => any;
export declare const renderBtn: (h: any, node: INode, context: any) => any;
export declare const renderLabel: (h: any, node: INode, context: any) => any;
export declare const renderChildren: (h: any, list: any, context: any) => any;
export declare const TreeOrgNode: {
    (props: any, context: any): any;
    directives: {
        focus: {
            mounted(el: HTMLElement, { value }: {
                value: any;
            }): void;
            updated(el: HTMLElement, { value }: {
                value: any;
            }): void;
        };
        nodedrag: import("vue").ObjectDirective<any, any>;
    };
};
export default TreeOrgNode;
