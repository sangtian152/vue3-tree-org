declare const _default: import("vue").DefineComponent<{
    readonly className: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "zm-draggable", unknown>;
    readonly classNameDraggable: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "draggable", unknown>;
    readonly classNameDragging: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "dragging", unknown>;
    readonly classNameActive: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "active", unknown>;
    readonly disableUserSelect: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly enableNativeDrag: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly preventDeactivation: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly active: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly draggable: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly x: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 0, unknown>;
    readonly y: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 0, unknown>;
    readonly z: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, "auto", unknown>;
    readonly dragCancel: StringConstructor;
    readonly axis: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "both", unknown>;
    readonly grid: import("../../../utils/props").BuildPropReturn<ArrayConstructor, unknown, unknown, () => number[], unknown>;
    readonly parent: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly scale: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 1, unknown>;
}, {
    enabled: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
    style: import("vue").ComputedRef<{
        userSelect: string;
        MozUserSelect: string;
        WebkitUserSelect: string;
        MsUserSelect: string;
        transform: string;
        zIndex: string | number;
    }>;
    resetBoundsAndMouseState: () => void;
    elementTouchDown: (e: MouseEvent) => void;
    elementMouseDown: (e: MouseEvent) => void;
    top: Window;
    eleRef: import("vue").Ref<HTMLElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    activated: () => boolean;
    deactivated: () => boolean;
    dragging: (x: number, y: number) => boolean;
    dragstop: (x: number, y: number) => boolean;
    'update:active': (value: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly className: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "zm-draggable", unknown>;
    readonly classNameDraggable: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "draggable", unknown>;
    readonly classNameDragging: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "dragging", unknown>;
    readonly classNameActive: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "active", unknown>;
    readonly disableUserSelect: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly enableNativeDrag: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly preventDeactivation: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly active: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly draggable: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, true, unknown>;
    readonly x: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 0, unknown>;
    readonly y: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 0, unknown>;
    readonly z: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, "auto", unknown>;
    readonly dragCancel: StringConstructor;
    readonly axis: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "both", unknown>;
    readonly grid: import("../../../utils/props").BuildPropReturn<ArrayConstructor, unknown, unknown, () => number[], unknown>;
    readonly parent: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, false, unknown>;
    readonly scale: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, 1, unknown>;
}>> & {
    onDragging?: ((x: number, y: number) => any) | undefined;
    onActivated?: (() => any) | undefined;
    onDeactivated?: (() => any) | undefined;
    onDragstop?: ((x: number, y: number) => any) | undefined;
    "onUpdate:active"?: ((value: boolean) => any) | undefined;
}, {
    readonly draggable: boolean;
    readonly active: boolean;
    readonly className: string;
    readonly classNameDraggable: string;
    readonly classNameDragging: string;
    readonly classNameActive: string;
    readonly disableUserSelect: boolean;
    readonly enableNativeDrag: boolean;
    readonly preventDeactivation: boolean;
    readonly x: number;
    readonly y: number;
    readonly z: string | number;
    readonly axis: string;
    readonly grid: unknown[];
    readonly parent: boolean;
    readonly scale: number;
}>;
export default _default;
