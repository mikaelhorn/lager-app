"use client";

import { X } from "@untitledui/icons";
import { useRef, type ReactNode } from "react";
import {
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    Modal as AriaModal,
    ModalOverlay as AriaModalOverlay,
    type DialogProps,
    type ModalOverlayProps,
} from "react-aria-components";
import { cx } from "@/utils/cx";

interface DrawerProps extends Omit<ModalOverlayProps, "children"> {
    children: ReactNode;
    trigger?: ReactNode;
}

interface DrawerContentProps extends DialogProps {
    children: ReactNode | ((opts: { close: () => void }) => ReactNode);
    title?: string;
    onClose?: () => void;
}

export function DrawerTrigger({ children, trigger, ...props }: DrawerProps) {
    return (
        <AriaDialogTrigger>
            {trigger}
            <AriaModalOverlay
                {...props}
                className={cx(
                    "fixed inset-0 z-50 bg-black/50",
                    "entering:animate-in entering:fade-in-0",
                    "exiting:animate-out exiting:fade-out-0"
                )}
            >
                <AriaModal
                    className={cx(
                        "fixed right-0 top-0 bottom-0 w-full max-w-xl bg-white shadow-xl",
                        "entering:animate-in entering:slide-in-from-right entering:duration-300",
                        "exiting:animate-out exiting:slide-out-to-right exiting:duration-300"
                    )}
                >
                    {children}
                </AriaModal>
            </AriaModalOverlay>
        </AriaDialogTrigger>
    );
}

export function DrawerContent({ children, title, onClose, ...props }: DrawerContentProps) {
    const dialogRef = useRef<HTMLDivElement>(null);

    return (
        <AriaDialog
            {...props}
            ref={dialogRef}
            className="h-full flex flex-col outline-none"
        >
            {({ close }) => (
                <>
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                        <button
                            onClick={() => {
                                onClose?.();
                                close();
                            }}
                            className="text-gray-400 hover:text-gray-500 transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto px-6 py-6">
                        {typeof children === "function" ? children({ close }) : children}
                    </div>
                </>
            )}
        </AriaDialog>
    );
}

export const Drawer = {
    Trigger: DrawerTrigger,
    Content: DrawerContent,
};
