"use client";

import { Plus, Trash01 } from "@untitledui/icons";
import { useState, useRef } from "react";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Label } from "@/components/base/input/label";
import { cx } from "@/utils/cx";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    children: React.ReactNode;
}

function Select({ children, className, ...props }: SelectProps) {
    return (
        <select
            {...props}
            className={cx(
                "w-full px-3 py-2 border border-gray-300 rounded-lg",
                "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                "text-sm text-gray-900 bg-white",
                "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
                className
            )}
        >
            {children}
        </select>
    );
}

interface OrderLine {
    id: string;
    carrier: string;
    quantity: string;
    unit: string;
    amount: string;
    price: string;
}

interface OneTimeFee {
    id: string;
    fee: string;
    quantity: string;
    price: string;
}

export function DeliveryForm({ onClose }: { onClose?: () => void }) {
    const [orderLines, setOrderLines] = useState<OrderLine[]>([
        { id: "1", carrier: "EU-pall", quantity: "1", unit: "M3", amount: "1", price: "200" },
        { id: "2", carrier: "Välj", quantity: "0", unit: "Välj enhet", amount: "0", price: "0" },
    ]);

    const [oneTimeFees, setOneTimeFees] = useState<OneTimeFee[]>([
        { id: "1", fee: "Välj lastbärare", quantity: "0", price: "0" },
    ]);

    const lastOrderLineRef = useRef<HTMLDivElement>(null);
    const lastFeeRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        customer: "",
        project: "",
        expectedDeliveryDate: "2025-11-10",
        warehouse: "Tumba",
        orderInfo: "Kund kommer och lämnar ca kl 16.",
        payFromOtherWarehouse: true,
    });

    const addOrderLine = () => {
        setOrderLines([
            ...orderLines,
            {
                id: Date.now().toString(),
                carrier: "Välj",
                quantity: "0",
                unit: "Välj enhet",
                amount: "0",
                price: "0",
            },
        ]);
    };

    const removeOrderLine = (id: string) => {
        setOrderLines(orderLines.filter((line) => line.id !== id));
    };

    const addOneTimeFee = () => {
        setOneTimeFees([
            ...oneTimeFees,
            {
                id: Date.now().toString(),
                fee: "Välj lastbärare",
                quantity: "0",
                price: "0",
            },
        ]);
    };

    const removeOneTimeFee = (id: string) => {
        setOneTimeFees(oneTimeFees.filter((fee) => fee.id !== id));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", { formData, orderLines, oneTimeFees });
        onClose?.();
    };

    return (
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-6">
                {/* Customer Search */}
                <div className="space-y-2">
                    <Label htmlFor="customer">Kund</Label>
                    <Input
                        id="customer"
                        placeholder="Sök kundnamn eller kundnummer"
                        value={formData.customer}
                        onChange={(value) => setFormData({ ...formData, customer: value })}
                    />
                </div>

                {/* Project */}
                <div className="space-y-2">
                    <Label htmlFor="project">Projekt</Label>
                    <Select
                        id="project"
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    >
                        <option value="">Välj projekt</option>
                        <option value="project1">Projekt 1</option>
                        <option value="project2">Projekt 2</option>
                    </Select>
                </div>

                {/* Expected Delivery Date */}
                <div className="space-y-2">
                    <Label htmlFor="deliveryDate">Förväntat leveransdatum</Label>
                    <Input
                        id="deliveryDate"
                        type="date"
                        value={formData.expectedDeliveryDate}
                        onChange={(value) => setFormData({ ...formData, expectedDeliveryDate: value })}
                    />
                </div>

                {/* Warehouse */}
                <div className="space-y-2">
                    <Label htmlFor="warehouse">Lager</Label>
                    <Input
                        id="warehouse"
                        value={formData.warehouse}
                        onChange={(value) => setFormData({ ...formData, warehouse: value })}
                    />
                </div>

                {/* Order Information */}
                <div className="space-y-2">
                    <Label htmlFor="orderInfo">Orderinformation</Label>
                    <p className="text-sm text-gray-500">Write a short introduction.</p>
                    <textarea
                        id="orderInfo"
                        value={formData.orderInfo}
                        onChange={(e) => setFormData({ ...formData, orderInfo: e.target.value })}
                        className="w-full min-h-[100px] px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        maxLength={275}
                    />
                    <p className="text-sm text-gray-500">{275 - formData.orderInfo.length} characters left</p>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        role="switch"
                        aria-checked={formData.payFromOtherWarehouse}
                        onClick={() =>
                            setFormData({ ...formData, payFromOtherWarehouse: !formData.payFromOtherWarehouse })
                        }
                        className={`
                            relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                            ${formData.payFromOtherWarehouse ? "bg-orange-500" : "bg-gray-200"}
                        `}
                    >
                        <span
                            className={`
                                inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                                ${formData.payFromOtherWarehouse ? "translate-x-6" : "translate-x-1"}
                            `}
                        />
                    </button>
                    <span className="text-sm text-gray-700">Ta betalt i annan enhet än lagerförd</span>
                </div>

                {/* Order Lines */}
                <div className="space-y-4">
                    <div className="sticky top-0 z-10 bg-white pb-2 -mx-6 px-6 pt-2">
                        <h3 className="text-lg font-semibold text-gray-900">Orderrader</h3>
                    </div>
                    
                    <div className="space-y-3">
                        {/* Header */}
                        <div className="grid grid-cols-[2fr_1fr_2fr_1fr_1.5fr_auto] gap-3 text-sm font-medium text-gray-700">
                            <div>Lastbärare</div>
                            <div>Antal</div>
                            <div>Debiteringsenhet</div>
                            <div>Antal</div>
                            <div>Å-Pris</div>
                            <div className="w-10"></div>
                        </div>

                        {/* Order Lines */}
                        {orderLines.map((line, index) => (
                            <div 
                                key={line.id} 
                                ref={index === orderLines.length - 1 ? lastOrderLineRef : null}
                                className="grid grid-cols-[2fr_1fr_2fr_1fr_1.5fr_auto] gap-3"
                            >
                                <Select
                                    value={line.carrier}
                                    onChange={(e) => {
                                        setOrderLines(
                                            orderLines.map((l) =>
                                                l.id === line.id ? { ...l, carrier: e.target.value } : l
                                            )
                                        );
                                    }}
                                >
                                    <option value="Välj">Välj</option>
                                    <option value="EU-pall">EU-pall</option>
                                    <option value="FIN-pall">FIN-pall</option>
                                    <option value="Block-pall">Block-pall</option>
                                </Select>

                                <Input
                                    type="number"
                                    value={line.quantity}
                                    onChange={(value) => {
                                        setOrderLines(
                                            orderLines.map((l) =>
                                                l.id === line.id ? { ...l, quantity: value } : l
                                            )
                                        );
                                    }}
                                />

                                <Select
                                    value={line.unit}
                                    onChange={(e) => {
                                        setOrderLines(
                                            orderLines.map((l) =>
                                                l.id === line.id ? { ...l, unit: e.target.value } : l
                                            )
                                        );
                                    }}
                                >
                                    <option value="Välj enhet">Välj enhet</option>
                                    <option value="M3">M3</option>
                                    <option value="KG">KG</option>
                                    <option value="Styck">Styck</option>
                                </Select>

                                <Input
                                    type="number"
                                    value={line.amount}
                                    onChange={(value) => {
                                        setOrderLines(
                                            orderLines.map((l) =>
                                                l.id === line.id ? { ...l, amount: value } : l
                                            )
                                        );
                                    }}
                                />

                                <Input
                                    type="number"
                                    value={line.price}
                                    onChange={(value) => {
                                        setOrderLines(
                                            orderLines.map((l) =>
                                                l.id === line.id ? { ...l, price: value } : l
                                            )
                                        );
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={() => removeOrderLine(line.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                    aria-label="Remove line"
                                >
                                    <Trash01 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}

                        {/* Add Line Button */}
                        <button
                            type="button"
                            onClick={addOrderLine}
                            className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Lägg till rad
                        </button>
                    </div>
                </div>

                {/* One-Time Fees */}
                <div className="space-y-4">
                    <div className="sticky top-0 z-10 bg-white pb-2 -mx-6 px-6 pt-2">
                        <h3 className="text-lg font-semibold text-gray-900">Engångsavgifter</h3>
                    </div>
                    
                    <div className="space-y-3">
                        {/* Header */}
                        <div className="grid grid-cols-[2fr_1fr_1.5fr_auto] gap-3 text-sm font-medium text-gray-700">
                            <div>Avgift</div>
                            <div>Antal</div>
                            <div>Pris</div>
                            <div className="w-10"></div>
                        </div>

                        {/* Fee Lines */}
                        {oneTimeFees.map((fee, index) => (
                            <div 
                                key={fee.id} 
                                ref={index === oneTimeFees.length - 1 ? lastFeeRef : null}
                                className="grid grid-cols-[2fr_1fr_1.5fr_auto] gap-3"
                            >
                                <Select
                                    value={fee.fee}
                                    onChange={(e) => {
                                        setOneTimeFees(
                                            oneTimeFees.map((f) =>
                                                f.id === fee.id ? { ...f, fee: e.target.value } : f
                                            )
                                        );
                                    }}
                                >
                                    <option value="Välj lastbärare">Välj lastbärare</option>
                                    <option value="Frakt">Frakt</option>
                                    <option value="Administration">Administration</option>
                                    <option value="Övertid">Övertid</option>
                                </Select>

                                <Input
                                    type="number"
                                    value={fee.quantity}
                                    onChange={(value) => {
                                        setOneTimeFees(
                                            oneTimeFees.map((f) =>
                                                f.id === fee.id ? { ...f, quantity: value } : f
                                            )
                                        );
                                    }}
                                />

                                <Input
                                    type="number"
                                    value={fee.price}
                                    onChange={(value) => {
                                        setOneTimeFees(
                                            oneTimeFees.map((f) =>
                                                f.id === fee.id ? { ...f, price: value } : f
                                            )
                                        );
                                    }}
                                />

                                <button
                                    type="button"
                                    onClick={() => removeOneTimeFee(fee.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                    aria-label="Remove fee"
                                >
                                    <Trash01 className="w-5 h-5" />
                                </button>
                            </div>
                        ))}

                        {/* Add Fee Button */}
                        <button
                            type="button"
                            onClick={addOneTimeFee}
                            className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Lägg till avgift
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-white mt-6">
                <Button color="secondary" type="button" onClick={onClose}>
                    Avbryt
                </Button>
                <Button color="primary" type="submit">
                    Skapa inleverans
                </Button>
            </div>
        </form>
    );
}
