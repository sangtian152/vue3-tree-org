import type { INode } from '@/utils/types';
export declare const renderNode: (h: any, data: INode, context: any, root: boolean) => any;
export declare const renderBtn: (h: any, data: INode, context: any) => any;
export declare const renderLabel: (h: any, data: INode, context: any, root: boolean) => any;
export declare const renderChildren: (h: any, list: any, context: any) => any;
export declare const TreeOrgNode: {
    (props: any, context: any): any;
    directives: {
        nodedrag: import("vue").ObjectDirective<any, any>;
    };
};
export default TreeOrgNode;
