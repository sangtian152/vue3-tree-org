import type { ExtractPropTypes } from 'vue';
import type { INode, INodeData, IMenu, IMousePosition } from '@/utils/types';
export declare const menus: {
    name: string;
    command: string;
}[];
export declare const treeProps: {
    readonly data: import("../../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly props: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<Partial<import("../../../utils/types").IKeysObject>>, unknown, unknown, () => {
        id: string;
        pid: string;
        label: string;
        expand: string;
        children: string;
    }, unknown>;
    readonly toolBar: import("../../../utils/props").BuildPropReturn<readonly [ObjectConstructor, BooleanConstructor], unknown, unknown, () => {
        expand: boolean;
        scale: boolean;
        zoom: boolean;
        restore: boolean;
        fullscreen: boolean;
    }, unknown>;
    readonly disabled: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly scalable: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly draggable: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly draggableOnNode: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly nodeDraggable: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly cloneNodeDrag: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly onlyOneNode: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly clickDelay: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 260, unknown>;
    readonly defaultExpandLevel: NumberConstructor;
    readonly nodeDragStart: FunctionConstructor;
    readonly nodeDraging: FunctionConstructor;
    readonly nodeDragEnd: FunctionConstructor;
    readonly horizontal: BooleanConstructor;
    readonly selectedKey: import("../../../utils/props").BuildPropReturn<readonly [ArrayConstructor, StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
    readonly collapsable: BooleanConstructor;
    readonly renderContent: FunctionConstructor;
    readonly labelStyle: ObjectConstructor;
    readonly labelClassName: import("../../../utils/props").BuildPropReturn<readonly [FunctionConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
    readonly selectedClassName: import("../../../utils/props").BuildPropReturn<readonly [FunctionConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
    readonly defineMenus: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<IMenu[]>, unknown, unknown, () => {
        name: string;
        command: string;
    }[], unknown>;
    readonly nodeAdd: FunctionConstructor;
    readonly nodeDelete: FunctionConstructor;
    readonly nodeEdit: FunctionConstructor;
    readonly nodeCopy: FunctionConstructor;
    readonly filterNodeMethod: FunctionConstructor;
};
export declare type TreeProps = ExtractPropTypes<typeof treeProps>;
export declare const treeEmits: {
    'on-drag': ({ x, y }: IMousePosition) => boolean;
    'on-drag-stop': ({ x, y }: IMousePosition) => boolean;
    'on-restore': () => boolean;
    'on-zoom': (val: number) => boolean;
    'on-expand': (e: MouseEvent, data: INodeData, node: INode) => boolean;
    'on-node-blur': (e: FocusEvent, data: INodeData, node: INode) => boolean;
    'on-node-click': (e: MouseEvent, data: INodeData, node: INode) => boolean;
    'on-node-dblclick': (e: MouseEvent, data: INodeData, node: INode) => boolean;
    'on-node-mouseenter': (e: MouseEvent, data: INodeData, node: INode) => boolean;
    'on-node-mouseleave': (e: MouseEvent, data: INodeData, node: INode) => boolean;
    'on-contextmenu': (data: any) => boolean;
    'on-node-copy': (str: string) => boolean;
    'on-node-delete': (node: INode) => boolean;
    'on-node-focus': (e: FocusEvent, data: INodeData, node: INode) => boolean;
};
export declare type TreeEmits = typeof treeEmits;
