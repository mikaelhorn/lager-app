"use client";

import { useMemo, useState } from "react";
import {
    Archive,
    BarChartSquare02,
    CurrencyDollarCircle,
    Grid03,
    HomeLine,
    LineChartUp03,
    MessageChatCircle,
    NotificationBox,
    Package,
    LogOut01,
    Rows01,
    Settings01,
    Star01,
    User01,
    Users01,
    UsersPlus,
} from "@untitledui/icons";
import type { SortDescriptor } from "react-aria-components";
import type { NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { Table, TableCard } from "@/components/application/table/table";
import { DeliveryForm } from "@/components/application/delivery-form/delivery-form";
import { Badge, BadgeWithDot } from "@/components/base/badges/badges";
import { Button } from "@/components/base/buttons/button";
import { Drawer } from "@/components/base/drawer/drawer";
import ordersData from "@/data/orders.json";

const navItemsSimple: NavItemType[] = [
    {
        label: "Lager",
        href: "/",
        icon: HomeLine,
        items: [
            { label: "Lagerordrar", href: "/overview" },
            { label: "Lagerlista", href: "/products" },
            { label: "Lagerinställningar", href: "/orders"},
        ],
    },
    {
        label: "Fakturering",
        href: "/dashboard",
        icon: BarChartSquare02,
        items: [
            { label: "Fakturakö", href: "/dashboard/overview"},
            { label: "Fakturaunderlag", href: "/dashboard/notifications" },
            { label: "Historik", href: "/dashboard/analytics"},
        ],
    },
    {
        label: "Kunder",
        href: "/projects",
        icon: Rows01,
    },
];

export default function Home() {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
        column: "id",
        direction: "ascending",
    });

    const sortedItems = useMemo(() => {
        return ordersData.items.sort((a, b) => {
            const first = a[sortDescriptor.column as keyof typeof a];
            const second = b[sortDescriptor.column as keyof typeof b];

            if (typeof first === "number" && typeof second === "number") {
                return sortDescriptor.direction === "descending" ? second - first : first - second;
            }

            if (typeof first === "string" && typeof second === "string") {
                let cmp = first.localeCompare(second);
                if (sortDescriptor.direction === "descending") {
                    cmp *= -1;
                }
                return cmp;
            }

            return 0;
        });
    }, [sortDescriptor]);

    return (
        <div className="flex h-screen">
            <SidebarNavigationSimple
                items={navItemsSimple}
                footerItems={[
                    {
                        label: "Inställningar",
                        href: "/settings",
                        icon: Settings01,
                    },
                    {
                        label: "Log out",
                        href: "/logout",
                        icon: LogOut01,
                    },
                ]}
            />
            <main className="flex-1 overflow-y-auto bg-white p-8">
                <div className="flex flex-row justify-between items-center mb-8">
                    <h1 className="text-display-sm font-semibold">Lagerordrar</h1>
                    <Drawer.Trigger trigger={<Button color="primary">Skapa leverans</Button>}>
                        <Drawer.Content title="Skapa inleverans">
                            {({ close }) => <DeliveryForm onClose={close} />}
                        </Drawer.Content>
                    </Drawer.Trigger>
                </div>

                <TableCard.Root>
                    <TableCard.Header title="Orders" badge={`${ordersData.items.length} orders`} />
                    <Table
                        aria-label="Orders"
                        selectionMode="multiple"
                        sortDescriptor={sortDescriptor}
                        onSortChange={setSortDescriptor}
                    >
                        <Table.Header>
                            <Table.Head id="customer" label="Customer" isRowHeader allowsSorting />
                            <Table.Head id="size" label="Storlek" allowsSorting />
                            <Table.Head id="quantity" label="Quantity" allowsSorting />
                            <Table.Head id="total" label="Total" allowsSorting />
                            <Table.Head id="status" label="Status" allowsSorting />
                        </Table.Header>

                        <Table.Body items={sortedItems}>
                            {(item) => (
                                <Table.Row id={item.id}>
                                    <Table.Cell className="font-medium">{item.customer}</Table.Cell>
                                    <Table.Cell>{item.size}</Table.Cell>
                                    <Table.Cell>{item.quantity}</Table.Cell>
                                    <Table.Cell>{item.total}</Table.Cell>
                                    <Table.Cell>
                                        <BadgeWithDot
                                            size="sm"
                                            color={
                                                item.status === "completed"
                                                    ? "success"
                                                    : item.status === "shipped"
                                                    ? "brand"
                                                    : "warning"
                                            }
                                            type="modern"
                                        >
                                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                        </BadgeWithDot>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </TableCard.Root>
            </main>
        </div>
    );
}