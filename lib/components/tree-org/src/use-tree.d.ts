import type { SetupContext } from 'vue';
import type { INode, IRefs } from '@/utils/types';
import type { TreeEmits, TreeProps } from './tree';
export declare const useTree: (props: TreeProps, { emit }: SetupContext<TreeEmits>, refs: IRefs) => {
    keys: {
        id: string;
        pid: string;
        label: string;
        expand: string;
        children: string;
    };
    left: import("vue").Ref<number>;
    top: import("vue").Ref<number>;
    menuX: import("vue").Ref<number>;
    menuY: import("vue").Ref<number>;
    nodeMoving: import("vue").Ref<boolean>;
    zoomStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
        transform: string;
    }>;
    tools: {
        visible: boolean;
        data: {
            expand: boolean;
            scale: boolean;
            zoom: boolean;
            restore: boolean;
            fullscreen: boolean;
        };
    };
    zoomPercent: import("vue").ComputedRef<string>;
    dragCancel: import("vue").ComputedRef<"" | ".tree-org-node-label">;
    expandTitle: import("vue").ComputedRef<"收起全部节点" | "展开全部节点">;
    fullTiltle: import("vue").ComputedRef<"收起全部节点" | "展开全部节点">;
    nodeargs: import("vue").ComputedRef<{
        drag: boolean;
        dragData: {
            keys: {
                id: string;
                pid: string;
                label: string;
                expand: string;
                children: string;
            };
            nodeMoving: import("vue").Ref<boolean>;
            parenNode: {
                value: {
                    [x: string]: any;
                } | null;
            };
            cloneNodeDrag: boolean;
            onlyOneNode: boolean;
            contextmenu: import("vue").Ref<boolean>;
            cloneData: {
                data: {};
            };
        };
        handleStart: Function | undefined;
        handleMove: Function | undefined;
        handleEnd: Function | undefined;
    }>;
    expanded: import("vue").Ref<boolean>;
    fullscreen: import("vue").Ref<boolean>;
    autoDragging: import("vue").Ref<boolean>;
    contextmenu: import("vue").Ref<boolean>;
    menuData: {
        data: {
            [x: string]: any;
        };
    };
    cloneData: {
        data: {};
    };
    zoomWheel: (e: WheelEvent) => void;
    onDrag: (x: number, y: number) => void;
    onDragStop: (x: number, y: number) => void;
    expandChange: () => void;
    handleFullscreen: () => void;
    zoomOrgchart: (zoom: number) => void;
    restoreOrgchart: () => void;
    handleExpand: (e: MouseEvent, data: INode) => void;
    nodeMouseenter: (e: MouseEvent, data: INode) => boolean;
    nodeMouseleave: (e: MouseEvent, data: INode) => boolean;
    nodeContextmenu: (e: MouseEvent, data: INode) => void;
    handleBlur: (e: MouseEvent, data: INode) => void;
    handleClick: (e: MouseEvent, data: INode) => void;
    handleDblclick: (e: MouseEvent, data: INode) => void;
};
