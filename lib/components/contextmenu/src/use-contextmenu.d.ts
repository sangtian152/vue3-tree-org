import type { SetupContext } from 'vue';
import type { ContextmenuEmits, ContextmenuProps } from './contextmenus';
import type { IRefs } from '@/utils/types';
export declare const useContextmenu: (defaultProps: ContextmenuProps, { emit }: SetupContext<ContextmenuEmits>, refs: IRefs) => {
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
};
