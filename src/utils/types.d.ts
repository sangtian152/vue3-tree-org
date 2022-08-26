import type { Ref } from 'vue'
export interface IRefs {
    [key: string]: Ref<HTMLElement | undefined>;
    inputRef?: Ref<HTMLInputElement | undefined>
}
export interface IContext {
    parenNode?: any;
    onlyOneNode?: any;
    data?: any;
    cloneNodeDrag?: any;
    keys?: any;
}

export type INodeData = Record<string, any>

export interface INode {
    id: number|string,
    pid: number|string,
    label: string,
    expand: boolean,
    $$data: INodeData
    $$level: number,
    $$root?: boolean,
    $$focused?:boolean,
    isLeaf?: boolean,
    hidden?: boolean,
    disabled?: boolean,
    moving?: boolean,
    focused?: boolean,
    style?: data.style,
    className?: string,
    children?: INode[],
}

export type IBounds = Record<string, number>

export type IMousePosition = Record<string, number>

export interface IMenu {
    name: string;
    command: string
}

export interface IKeysObject {
    id: string;
    pid: string;
    label: string;
    expand: string;
    children: string;
    isLeaf: string;
}

export type IKeysProps = Partial<IKeysObject>

export type DefineMenus = (e: MouseEvent, node: INode) => IMenu[]

export type LoadCb = (data: INodeData[], auto:boolean) => void

export type LoadFn = (node: INode, cb: LoadCb) => void
