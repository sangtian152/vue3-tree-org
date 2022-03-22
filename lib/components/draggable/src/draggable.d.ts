import type { ExtractPropTypes } from 'vue';
export declare const draggableProps: {
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
};
export declare type DraggableProps = ExtractPropTypes<typeof draggableProps>;
export declare const draggableEmits: {
    activated: () => boolean;
    deactivated: () => boolean;
    dragging: (x: number, y: number) => boolean;
    dragstop: (x: number, y: number) => boolean;
    'update:active': (value: boolean) => boolean;
};
export declare type DraggableEmits = typeof draggableEmits;
