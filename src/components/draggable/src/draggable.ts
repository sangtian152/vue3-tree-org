import { buildProps, definePropType } from '@/utils/props'
import type { ExtractPropTypes } from 'vue'

export const draggableProps = buildProps({
    className: {
        type: String,
        default: 'zm-draggable'
    },
    classNameDraggable: {
        type: String,
        default: 'draggable'
    },
    classNameDragging: {
        type: String,
        default: 'dragging'
    },
    classNameActive: {
        type: String,
        default: 'active'
    },
    disableUserSelect: {
        type: Boolean,
        default: true
    },
    enableNativeDrag: {
        type: Boolean,
        default: false
    },
    preventDeactivation: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: false
    },
    draggable: {
        type: Boolean,
        default: true
    },
    resizable: {
        type: Boolean,
        default: true
    },
    lockAspectRatio: {
        type: Boolean,
        default: false
    },
    w: {
        type: [Number, String],
        default: 200,
        validator: (val: string | number) => {
            if (typeof val === 'number') {
                return val > 0
            }
            return val === 'auto'
        }
    },
    h: {
        type: [Number, String],
        default: 200,
        validator: (val: string | number) => {
            if (typeof val === 'number') {
                return val > 0
            }
            return val === 'auto'
        }
    },
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    },
    z: {
        type: [String, Number],
        default: 'auto',
        validator: (val: string | number) => (typeof val === 'string' ? val === 'auto' : val >= 0)
    },
    dragHandle: String,
    dragCancel: String,
    axis: {
        type: String,
        default: 'both',
        validator: (val: string) => ['x', 'y', 'both'].includes(val)
    },
    grid: {
        type: Array,
        default: () => [1, 1]
    },
    parent: {
        type: Boolean,
        default: false
    },
    scale: {
        type: Number,
        default: 1,
        validator: (val: number) => val > 0
    },
    onDragStart: {
        type: Function,
        default: () => true
    },
    onDrag: {
        type: Function,
        default: () => true
    }
} as const)

export type DraggableProps = ExtractPropTypes<typeof draggableProps>

export const draggableEmits = {
    activated: () => true,
    deactivated: () => false,
    dragging: (x:number, y:number) => {},
    dragstop: (x:number, y:number) => {},
    ['update:active']: (value: boolean) => typeof value === 'boolean'
}
export type DraggableEmits = typeof draggableEmits