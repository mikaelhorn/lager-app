"use client";

import type { FC } from "react";
import type { NavItemType } from "@/components/application/app-navigation/config";
import { NavList } from "@/components/application/app-navigation/base-components/nav-list";

export interface SidebarNavigationSimpleProps {
    /** Navigation items to display. */
    items: NavItemType[];
    /** Footer navigation items. */
    footerItems?: NavItemType[];
    /** Featured card to display at the bottom of the sidebar. */
    featureCard?: React.ReactNode;
}

export const SidebarNavigationSimple: FC<SidebarNavigationSimpleProps> = ({ items, footerItems, featureCard }) => {
    return (
        <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white">
            <div className="flex-1 overflow-y-auto p-4">
                <NavList items={items} />
            </div>
            {(featureCard || footerItems) && (
                <div className="border-t border-gray-200 p-4">
                    {featureCard}
                    {footerItems && <NavList items={footerItems} />}
                </div>
            )}
        </aside>
    );
};
