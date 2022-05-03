import type { ExtractPropTypes } from 'vue';
import type { INodeData, IMenu, INode } from '@/utils/types';
export declare const contextmenuProps: {
    readonly modelValue: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, true>;
    readonly data: import("../../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly node: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<INode>, unknown, unknown, unknown, true>;
    readonly props: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<Partial<import("../../../utils/types").IKeysObject>>, unknown, unknown, unknown, unknown>;
    readonly x: NumberConstructor;
    readonly y: NumberConstructor;
    readonly menus: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<IMenu[]>, unknown, unknown, unknown, unknown>;
    readonly nodeAdd: FunctionConstructor;
    readonly nodeDelete: FunctionConstructor;
    readonly nodeEdit: FunctionConstructor;
    readonly nodeCopy: FunctionConstructor;
    readonly disabled: BooleanConstructor;
};
export declare type ContextmenuProps = ExtractPropTypes<typeof contextmenuProps>;
export declare const contextmenuEmits: {
    onNodeDelete: (data: INodeData, node: INode) => boolean;
    onNodeCopy: (str: string) => boolean;
    contextmenu: (arg: {
        node: INode;
        data: INodeData;
        command: string | null;
    }) => boolean;
    onNodeFocus: (data: INodeData) => boolean;
    opened: () => boolean;
    closed: () => boolean;
    'update:modelValue': (value: boolean) => boolean;
};
export declare type ContextmenuEmits = typeof contextmenuEmits;
