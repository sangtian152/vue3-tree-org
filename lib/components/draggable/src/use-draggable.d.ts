import type { SetupContext } from 'vue';
import type { IRefs } from '@/utils/types';
import type { DraggableEmits, DraggableProps } from './draggable';
export declare const useDraggable: (props: DraggableProps, { emit }: SetupContext<DraggableEmits>, refs: IRefs) => {
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
};
