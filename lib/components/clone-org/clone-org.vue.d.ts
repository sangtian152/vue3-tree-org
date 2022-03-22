declare const _default: import("vue").DefineComponent<{
    readonly data: import("../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly props: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<Partial<import("../../utils/types").IKeysObject>>, unknown, unknown, unknown, unknown>;
    readonly modelValue: BooleanConstructor;
    readonly horizontal: BooleanConstructor;
    readonly selectedKey: StringConstructor;
    readonly collapsable: BooleanConstructor;
    readonly renderContent: FunctionConstructor;
    readonly labelStyle: ObjectConstructor;
    readonly labelClassName: import("../../utils/props").BuildPropReturn<readonly [FunctionConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly data: import("../../utils/props").BuildPropReturn<ObjectConstructor, unknown, unknown, unknown, true>;
    readonly props: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<Partial<import("../../utils/types").IKeysObject>>, unknown, unknown, unknown, unknown>;
    readonly modelValue: BooleanConstructor;
    readonly horizontal: BooleanConstructor;
    readonly selectedKey: StringConstructor;
    readonly collapsable: BooleanConstructor;
    readonly renderContent: FunctionConstructor;
    readonly labelStyle: ObjectConstructor;
    readonly labelClassName: import("../../utils/props").BuildPropReturn<readonly [FunctionConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
}>>, {
    props: Partial<import("../../utils/types").IKeysObject>;
    modelValue: boolean;
    horizontal: boolean;
    collapsable: boolean;
    labelClassName: string | Function;
}>;
export default _default;
