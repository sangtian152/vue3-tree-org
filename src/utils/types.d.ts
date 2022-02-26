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
export type INode = Record<string, any>

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
}

export type IKeysProps = Partial<IKeysObject>
