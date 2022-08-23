import type { SetupContext } from 'vue';
import type { INode, INodeData, IRefs } from '@/utils/types';
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
    dragCancel: import("vue").ComputedRef<"" | ".tree-org-node__content:not(.is-root)>.tree-org-node__inner">;
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
            stopClick: {
                get: () => boolean;
                set: (val: boolean) => void;
            };
            parenNode: {
                value: {
                    id: string | number;
                    pid: string | number;
                    label: string;
                    expand: boolean;
                    $$data: Record<string, any>;
                    $$level: number;
                    $$root?: boolean | undefined;
                    $$focused?: boolean | undefined;
                    isLeaf?: boolean | undefined;
                    hidden?: boolean | undefined;
                    disabled?: boolean | undefined;
                    moving?: boolean | undefined;
                    focused?: boolean | undefined;
                    style?: any;
                    className?: string | undefined;
                    children?: any[] | undefined;
                } | null;
            };
            cloneNodeDrag: boolean;
            onlyOneNode: boolean;
            contextmenu: import("vue").Ref<boolean>;
            cloneData: import("vue").Ref<{}>;
            data: Record<string, any>;
        };
        beforeDragEnd: Function | undefined;
        initNodes: (nodeData: INodeData) => INode;
        emit: ((event: "on-drag", args_0: Record<string, number>) => void) & ((event: "on-drag-stop", args_0: Record<string, number>) => void) & ((event: "on-restore") => void) & ((event: "on-zoom", val: number) => void) & ((event: "on-expand", e: MouseEvent, data: Record<string, any>, node: INode) => void) & ((event: "on-expand-all", bool: boolean) => void) & ((event: "on-node-blur", e: FocusEvent, data: Record<string, any>, node: INode) => void) & ((event: "on-node-click", e: MouseEvent, data: Record<string, any>, node: INode) => void) & ((event: "on-node-dblclick", e: MouseEvent, data: Record<string, any>, node: INode) => void) & ((event: "on-node-mouseenter", e: MouseEvent, data: Record<string, any>, node: INode) => void) & ((event: "on-node-mouseleave", e: MouseEvent, data: Record<string, any>, node: INode) => void) & ((event: "on-contextmenu", data: any) => void) & ((event: "on-node-copy", str: string) => void) & ((event: "on-node-delete", node: INode) => void) & ((event: "on-node-drag-start", node: INode) => void) & ((event: "on-node-drag", node: INode) => void) & ((event: "on-node-drag-end", node: INode, targetNode: INode) => void) & ((event: "on-node-focus", e: FocusEvent, data: Record<string, any>, node: INode) => void);
    }>;
    expanded: import("vue").Ref<boolean>;
    fullscreen: import("vue").Ref<boolean>;
    treeData: import("vue").Ref<{
        id: string | number;
        pid: string | number;
        label: string;
        expand: boolean;
        $$data: Record<string, any>;
        $$level: number;
        $$root?: boolean | undefined;
        $$focused?: boolean | undefined;
        isLeaf?: boolean | undefined;
        hidden?: boolean | undefined;
        disabled?: boolean | undefined;
        moving?: boolean | undefined;
        focused?: boolean | undefined;
        style?: any;
        className?: string | undefined;
        children?: any[] | undefined;
    }>;
    autoDragging: import("vue").Ref<boolean>;
    contextmenu: import("vue").Ref<boolean>;
    nodeMenus: import("vue").Ref<{
        name: string;
        command: string;
    }[]>;
    menuData: import("vue").Ref<{
        id: string | number;
        pid: string | number;
        label: string;
        expand: boolean;
        $$data: Record<string, any>;
        $$level: number;
        $$root?: boolean | undefined;
        $$focused?: boolean | undefined;
        isLeaf?: boolean | undefined;
        hidden?: boolean | undefined;
        disabled?: boolean | undefined;
        moving?: boolean | undefined;
        focused?: boolean | undefined;
        style?: any;
        className?: string | undefined;
        children?: any[] | undefined;
    }>;
    cloneData: import("vue").Ref<{}>;
    filter: (value: any) => void;
    setData: (data: INodeData) => void;
    zoomWheel: (e: WheelEvent) => void;
    onDrag: (x: number, y: number) => void;
    onDragStop: (x: number, y: number) => void;
    expandChange: () => void;
    handleFullscreen: (e: string) => void;
    zoomOrgchart: (zoom: number) => void;
    restoreOrgchart: () => void;
    handleExpand: (e: MouseEvent, node: INode) => void;
    nodeMouseenter: (e: MouseEvent, node: INode) => boolean;
    nodeMouseleave: (e: MouseEvent, node: INode) => boolean;
    nodeContextmenu: (e: MouseEvent, node: INode) => void;
    handleBlur: (e: MouseEvent, data: INodeData, node: INode) => void;
    handleClick: (e: MouseEvent, node: INode) => void;
    handleDblclick: (e: MouseEvent, node: INode) => void;
};
