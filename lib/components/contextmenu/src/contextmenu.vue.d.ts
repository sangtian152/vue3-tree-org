declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, true>;
    readonly data: import("../../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly node: import("../../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly props: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<Partial<import("../../../utils/types").IKeysObject>>, unknown, unknown, unknown, unknown>;
    readonly x: NumberConstructor;
    readonly y: NumberConstructor;
    readonly menus: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<import("../../../utils/types").IMenu[]>, unknown, unknown, unknown, unknown>;
    readonly nodeAdd: FunctionConstructor;
    readonly nodeDelete: FunctionConstructor;
    readonly nodeEdit: FunctionConstructor;
    readonly nodeCopy: FunctionConstructor;
    readonly disabled: BooleanConstructor;
}, {
    position: import("vue").ComputedRef<{
        left: string;
        top: string;
    }>;
    editable: import("vue").ComputedRef<boolean>;
    handleMenu: (e: MouseEvent) => void;
    handleEdit: () => void;
    handleClose: (e: MouseEvent) => false | undefined;
    afterEnter: () => void;
    afterLeave: () => void;
    eleRef: import("vue").Ref<HTMLElement | undefined>;
    inputRef: import("vue").Ref<HTMLInputElement | undefined>;
    copyText: import("vue").Ref<string>;
    oldData: {};
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onNodeDelete: (data: Record<string, any>) => boolean;
    onNodeCopy: (str: string) => boolean;
    contextmenu: (arg: {
        node: Record<string, any>;
        command: string | null;
    }) => boolean;
    opened: () => boolean;
    closed: () => boolean;
    'update:modelValue': (value: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, true>;
    readonly data: import("../../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly node: import("../../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly props: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<Partial<import("../../../utils/types").IKeysObject>>, unknown, unknown, unknown, unknown>;
    readonly x: NumberConstructor;
    readonly y: NumberConstructor;
    readonly menus: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<import("../../../utils/types").IMenu[]>, unknown, unknown, unknown, unknown>;
    readonly nodeAdd: FunctionConstructor;
    readonly nodeDelete: FunctionConstructor;
    readonly nodeEdit: FunctionConstructor;
    readonly nodeCopy: FunctionConstructor;
    readonly disabled: BooleanConstructor;
}>> & {
    onContextmenu?: ((arg: {
        node: Record<string, any>;
        command: string | null;
    }) => any) | undefined;
    onOnNodeDelete?: ((data: Record<string, any>) => any) | undefined;
    onOnNodeCopy?: ((str: string) => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    props: Partial<import("../../../utils/types").IKeysObject>;
    menus: import("../../../utils/types").IMenu[];
    disabled: boolean;
}>;
export default _default;
