module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/utils/cx.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cx",
    ()=>cx,
    "sortCx",
    ()=>sortCx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
const twMerge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extendTailwindMerge"])({
    extend: {
        theme: {
            text: [
                "display-xs",
                "display-sm",
                "display-md",
                "display-lg",
                "display-xl",
                "display-2xl"
            ]
        }
    }
});
const cx = twMerge;
function sortCx(classes) {
    return classes;
}
}),
"[project]/src/components/foundations/dot-icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dot",
    ()=>Dot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const sizes = {
    sm: {
        wh: 8,
        c: 4,
        r: 2.5
    },
    md: {
        wh: 10,
        c: 5,
        r: 4
    }
};
const Dot = ({ size = "md", ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: sizes[size].wh,
        height: sizes[size].wh,
        viewBox: `0 0 ${sizes[size].wh} ${sizes[size].wh}`,
        fill: "none",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
            cx: sizes[size].c,
            cy: sizes[size].c,
            r: sizes[size].r,
            fill: "currentColor",
            stroke: "currentColor"
        }, void 0, false, {
            fileName: "[project]/src/components/foundations/dot-icon.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/foundations/dot-icon.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/base/badges/badge-types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "badgeTypes",
    ()=>badgeTypes
]);
const badgeTypes = {
    pillColor: "pill-color",
    badgeColor: "color",
    badgeModern: "modern"
};
}),
"[project]/src/components/base/badges/badges.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "BadgeIcon",
    ()=>BadgeIcon,
    "BadgeWithButton",
    ()=>BadgeWithButton,
    "BadgeWithDot",
    ()=>BadgeWithDot,
    "BadgeWithFlag",
    ()=>BadgeWithFlag,
    "BadgeWithIcon",
    ()=>BadgeWithIcon,
    "BadgeWithImage",
    ()=>BadgeWithImage,
    "filledColors",
    ()=>filledColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$X$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/X.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foundations$2f$dot$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/foundations/dot-icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/badges/badge-types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const filledColors = {
    gray: {
        root: "bg-utility-gray-50 text-utility-gray-700 ring-utility-gray-200",
        addon: "text-utility-gray-500",
        addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500"
    },
    brand: {
        root: "bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200",
        addon: "text-utility-brand-500",
        addonButton: "hover:bg-utility-brand-100 text-utility-brand-400 hover:text-utility-brand-500"
    },
    error: {
        root: "bg-utility-error-50 text-utility-error-700 ring-utility-error-200",
        addon: "text-utility-error-500",
        addonButton: "hover:bg-utility-error-100 text-utility-error-400 hover:text-utility-error-500"
    },
    warning: {
        root: "bg-utility-warning-50 text-utility-warning-700 ring-utility-warning-200",
        addon: "text-utility-warning-500",
        addonButton: "hover:bg-utility-warning-100 text-utility-warning-400 hover:text-utility-warning-500"
    },
    success: {
        root: "bg-utility-success-50 text-utility-success-700 ring-utility-success-200",
        addon: "text-utility-success-500",
        addonButton: "hover:bg-utility-success-100 text-utility-success-400 hover:text-utility-success-500"
    },
    "gray-blue": {
        root: "bg-utility-gray-blue-50 text-utility-gray-blue-700 ring-utility-gray-blue-200",
        addon: "text-utility-gray-blue-500",
        addonButton: "hover:bg-utility-gray-blue-100 text-utility-gray-blue-400 hover:text-utility-gray-blue-500"
    },
    "blue-light": {
        root: "bg-utility-blue-light-50 text-utility-blue-light-700 ring-utility-blue-light-200",
        addon: "text-utility-blue-light-500",
        addonButton: "hover:bg-utility-blue-light-100 text-utility-blue-light-400 hover:text-utility-blue-light-500"
    },
    blue: {
        root: "bg-utility-blue-50 text-utility-blue-700 ring-utility-blue-200",
        addon: "text-utility-blue-500",
        addonButton: "hover:bg-utility-blue-100 text-utility-blue-400 hover:text-utility-blue-500"
    },
    indigo: {
        root: "bg-utility-indigo-50 text-utility-indigo-700 ring-utility-indigo-200",
        addon: "text-utility-indigo-500",
        addonButton: "hover:bg-utility-indigo-100 text-utility-indigo-400 hover:text-utility-indigo-500"
    },
    purple: {
        root: "bg-utility-purple-50 text-utility-purple-700 ring-utility-purple-200",
        addon: "text-utility-purple-500",
        addonButton: "hover:bg-utility-purple-100 text-utility-purple-400 hover:text-utility-purple-500"
    },
    pink: {
        root: "bg-utility-pink-50 text-utility-pink-700 ring-utility-pink-200",
        addon: "text-utility-pink-500",
        addonButton: "hover:bg-utility-pink-100 text-utility-pink-400 hover:text-utility-pink-500"
    },
    orange: {
        root: "bg-utility-orange-50 text-utility-orange-700 ring-utility-orange-200",
        addon: "text-utility-orange-500",
        addonButton: "hover:bg-utility-orange-100 text-utility-orange-400 hover:text-utility-orange-500"
    }
};
const addonOnlyColors = Object.fromEntries(Object.entries(filledColors).map(([key, value])=>[
        key,
        {
            root: "",
            addon: value.addon
        }
    ]));
const withPillTypes = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset",
        styles: filledColors
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset",
        styles: filledColors
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset shadow-xs",
        styles: {
            gray: {
                root: "bg-primary text-secondary ring-primary",
                addon: "text-gray-500",
                addonButton: "hover:bg-utility-gray-100 text-utility-gray-400 hover:text-utility-gray-500"
            }
        }
    }
};
const withBadgeTypes = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-full ring-1 ring-inset",
        styles: filledColors
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset",
        styles: filledColors
    },
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: {
        common: "size-max flex items-center whitespace-nowrap rounded-md ring-1 ring-inset bg-primary text-secondary ring-primary shadow-xs",
        styles: addonOnlyColors
    }
};
const Badge = (props)=>{
    const { type = "pill-color", size = "md", color = "gray", children } = props;
    const colors = withPillTypes[type];
    const pillSizes = {
        sm: "py-0.5 px-2 text-xs font-medium",
        md: "py-0.5 px-2.5 text-sm font-medium",
        lg: "py-1 px-3 text-sm font-medium"
    };
    const badgeSizes = {
        sm: "py-0.5 px-1.5 text-xs font-medium",
        md: "py-0.5 px-2 text-sm font-medium",
        lg: "py-1 px-2.5 text-sm font-medium rounded-lg"
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size], colors.styles[color].root, props.className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 145,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const BadgeWithDot = (props)=>{
    const { size = "md", color = "gray", type = "pill-color", className, children } = props;
    const colors = withBadgeTypes[type];
    const pillSizes = {
        sm: "gap-1 py-0.5 pl-1.5 pr-2 text-xs font-medium",
        md: "gap-1.5 py-0.5 pl-2 pr-2.5 text-sm font-medium",
        lg: "gap-1.5 py-1 pl-2.5 pr-3 text-sm font-medium"
    };
    const badgeSizes = {
        sm: "gap-1 py-0.5 px-1.5 text-xs font-medium",
        md: "gap-1.5 py-0.5 px-2 text-sm font-medium",
        lg: "gap-1.5 py-1 px-2.5 text-sm font-medium rounded-lg"
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size], colors.styles[color].root, className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$foundations$2f$dot$2d$icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], {
                className: colors.styles[color].addon,
                size: "sm"
            }, void 0, false, {
                fileName: "[project]/src/components/base/badges/badges.tsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 180,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BadgeWithIcon = (props)=>{
    const { size = "md", color = "gray", type = "pill-color", iconLeading: IconLeading, iconTrailing: IconTrailing, children, className } = props;
    const colors = withBadgeTypes[type];
    const icon = IconLeading ? "leading" : "trailing";
    const pillSizes = {
        sm: {
            trailing: "gap-0.5 py-0.5 pl-2 pr-1.5 text-xs font-medium",
            leading: "gap-0.5 py-0.5 pr-2 pl-1.5 text-xs font-medium"
        },
        md: {
            trailing: "gap-1 py-0.5 pl-2.5 pr-2 text-sm font-medium",
            leading: "gap-1 py-0.5 pr-2.5 pl-2 text-sm font-medium"
        },
        lg: {
            trailing: "gap-1 py-1 pl-3 pr-2.5 text-sm font-medium",
            leading: "gap-1 py-1 pr-3 pl-2.5 text-sm font-medium"
        }
    };
    const badgeSizes = {
        sm: {
            trailing: "gap-0.5 py-0.5 pl-2 pr-1.5 text-xs font-medium",
            leading: "gap-0.5 py-0.5 pr-2 pl-1.5 text-xs font-medium"
        },
        md: {
            trailing: "gap-1 py-0.5 pl-2 pr-1.5 text-sm font-medium",
            leading: "gap-1 py-0.5 pr-2 pl-1.5 text-sm font-medium"
        },
        lg: {
            trailing: "gap-1 py-1 pl-2.5 pr-2 text-sm font-medium rounded-lg",
            leading: "gap-1 py-1 pr-2.5 pl-2 text-sm font-medium rounded-lg"
        }
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size][icon], colors.styles[color].root, className),
        children: [
            IconLeading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLeading, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.styles[color].addon, "size-3 stroke-3")
            }, void 0, false, {
                fileName: "[project]/src/components/base/badges/badges.tsx",
                lineNumber: 241,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            children,
            IconTrailing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrailing, {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.styles[color].addon, "size-3 stroke-3")
            }, void 0, false, {
                fileName: "[project]/src/components/base/badges/badges.tsx",
                lineNumber: 243,
                columnNumber: 30
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 240,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BadgeWithFlag = (props)=>{
    const { size = "md", color = "gray", flag = "AU", type = "pill-color", children } = props;
    const colors = withPillTypes[type];
    const pillSizes = {
        sm: "gap-1 py-0.5 pl-0.75 pr-2 text-xs font-medium",
        md: "gap-1.5 py-0.5 pl-1 pr-2.5 text-sm font-medium",
        lg: "gap-1.5 py-1 pl-1.5 pr-3 text-sm font-medium"
    };
    const badgeSizes = {
        sm: "gap-1 py-0.5 pl-1 pr-1.5 text-xs font-medium",
        md: "gap-1.5 py-0.5 pl-1.5 pr-2 text-sm font-medium",
        lg: "gap-1.5 py-1 pl-2 pr-2.5 text-sm font-medium rounded-lg"
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size], colors.styles[color].root),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `https://www.untitledui.com/images/flags/${flag}.svg`,
                className: "size-4 max-w-none rounded-full",
                alt: `${flag} flag`
            }, void 0, false, {
                fileName: "[project]/src/components/base/badges/badges.tsx",
                lineNumber: 280,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 279,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BadgeWithImage = (props)=>{
    const { size = "md", color = "gray", type = "pill-color", imgSrc, children } = props;
    const colors = withPillTypes[type];
    const pillSizes = {
        sm: "gap-1 py-0.5 pl-0.75 pr-2 text-xs font-medium",
        md: "gap-1.5 py-0.5 pl-1 pr-2.5 text-sm font-medium",
        lg: "gap-1.5 py-1 pl-1.5 pr-3 text-sm font-medium"
    };
    const badgeSizes = {
        sm: "gap-1 py-0.5 pl-1 pr-1.5 text-xs font-medium",
        md: "gap-1.5 py-0.5 pl-1.5 pr-2 text-sm font-medium",
        lg: "gap-1.5 py-1 pl-2 pr-2.5 text-sm font-medium rounded-lg"
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size], colors.styles[color].root),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imgSrc,
                className: "size-4 max-w-none rounded-full",
                alt: "Badge image"
            }, void 0, false, {
                fileName: "[project]/src/components/base/badges/badges.tsx",
                lineNumber: 318,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 317,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BadgeWithButton = (props)=>{
    const { size = "md", color = "gray", type = "pill-color", icon: Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$X$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X"], buttonLabel, children } = props;
    const colors = withPillTypes[type];
    const pillSizes = {
        sm: "gap-0.5 py-0.5 pl-2 pr-0.75 text-xs font-medium",
        md: "gap-0.5 py-0.5 pl-2.5 pr-1 text-sm font-medium",
        lg: "gap-0.5 py-1 pl-3 pr-1.5 text-sm font-medium"
    };
    const badgeSizes = {
        sm: "gap-0.5 py-0.5 pl-1.5 pr-0.75 text-xs font-medium",
        md: "gap-0.5 py-0.5 pl-2 pr-1 text-sm font-medium",
        lg: "gap-0.5 py-1 pl-2.5 pr-1.5 text-sm font-medium rounded-lg"
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size], colors.styles[color].root),
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": buttonLabel,
                onClick: props.onButtonClick,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("flex cursor-pointer items-center justify-center p-0.5 outline-focus-ring transition duration-100 ease-linear focus-visible:outline-2", colors.styles[color].addonButton, type === "pill-color" ? "rounded-full" : "rounded-[3px]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "size-3 stroke-[3px] transition-inherit-all"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/badges/badges.tsx",
                    lineNumber: 375,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/base/badges/badges.tsx",
                lineNumber: 365,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 363,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const BadgeIcon = (props)=>{
    const { size = "md", color = "gray", type = "pill-color", icon: Icon } = props;
    const colors = withPillTypes[type];
    const pillSizes = {
        sm: "p-1.25",
        md: "p-1.5",
        lg: "p-2"
    };
    const badgeSizes = {
        sm: "p-1.25",
        md: "p-1.5",
        lg: "p-2 rounded-lg"
    };
    const sizes = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].pillColor]: pillSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeColor]: badgeSizes,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badge$2d$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["badgeTypes"].badgeModern]: badgeSizes
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(colors.common, sizes[type][size], colors.styles[color].root),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("size-3 stroke-[3px]", colors.styles[color].addon)
        }, void 0, false, {
            fileName: "[project]/src/components/base/badges/badges.tsx",
            lineNumber: 414,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/base/badges/badges.tsx",
        lineNumber: 413,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/application/app-navigation/base-components/nav-item.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavItemBase",
    ()=>NavItemBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$ChevronDown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/ChevronDown.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Share04$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/Share04.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Link.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/badges/badges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortCx"])({
    root: "group relative flex w-full cursor-pointer items-center rounded-md bg-primary outline-focus-ring transition duration-100 ease-linear select-none hover:bg-primary_hover focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
    rootSelected: "bg-active hover:bg-secondary_hover"
});
const NavItemBase = ({ current, type, badge, href, icon: Icon, children, truncate = true, onClick })=>{
    const iconElement = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        "aria-hidden": "true",
        className: "mr-2 size-5 shrink-0 text-fg-quaternary transition-inherit-all"
    }, void 0, false, {
        fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
        lineNumber: 38,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
    const badgeElement = badge && (typeof badge === "string" || typeof badge === "number") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
        className: "ml-3",
        color: "gray",
        type: "pill-color",
        size: "sm",
        children: badge
    }, void 0, false, {
        fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
        lineNumber: 42,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)) : badge;
    const labelElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("flex-1 text-md font-semibold text-secondary transition-inherit-all group-hover:text-secondary_hover", truncate && "truncate", current && "text-secondary_hover"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
    const isExternal = href && href.startsWith("http");
    const externalIcon = isExternal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Share04$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Share04"], {
        className: "size-4 stroke-[2.5px] text-fg-quaternary"
    }, void 0, false, {
        fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
        lineNumber: 62,
        columnNumber: 40
    }, ("TURBOPACK compile-time value", void 0));
    if (type === "collapsible") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("px-3 py-2", styles.root, current && styles.rootSelected),
            onClick: onClick,
            children: [
                iconElement,
                labelElement,
                badgeElement,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$ChevronDown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronDown"], {
                    "aria-hidden": "true",
                    className: "ml-3 size-4 shrink-0 stroke-[2.5px] text-fg-quaternary in-open:-scale-y-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
            lineNumber: 66,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (type === "collapsible-child") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
            href: href,
            target: isExternal ? "_blank" : "_self",
            rel: "noopener noreferrer",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("py-2 pr-3 pl-10", styles.root, current && styles.rootSelected),
            onClick: onClick,
            "aria-current": current ? "page" : undefined,
            children: [
                labelElement,
                externalIcon,
                badgeElement
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
            lineNumber: 80,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
        href: href,
        target: isExternal ? "_blank" : "_self",
        rel: "noopener noreferrer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("px-3 py-2", styles.root, current && styles.rootSelected),
        onClick: onClick,
        "aria-current": current ? "page" : undefined,
        children: [
            iconElement,
            labelElement,
            externalIcon,
            badgeElement
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/application/app-navigation/base-components/nav-item.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/application/app-navigation/base-components/nav-list.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavList",
    ()=>NavList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/application/app-navigation/base-components/nav-item.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const NavList = ({ activeUrl, items, className })=>{
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeItem = items.find((item)=>item.href === activeUrl || item.items?.some((subItem)=>subItem.href === activeUrl));
    const [currentItem, setCurrentItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(activeItem);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("mt-4 flex flex-col px-2 lg:px-4", className),
        children: items.map((item, index)=>{
            if (item.divider) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "w-full px-0.5 py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                        className: "h-px w-full border-none bg-border-secondary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                        lineNumber: 28,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            }
            if (item.items?.length) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    open: activeItem?.href === item.href,
                    className: "appearance-none py-0.5",
                    onToggle: (e)=>{
                        setOpen(e.currentTarget.open);
                        setCurrentItem(item);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavItemBase"], {
                            href: item.href,
                            badge: item.badge,
                            icon: item.icon,
                            type: "collapsible",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                            lineNumber: 44,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "py-0.5",
                                children: item.items.map((childItem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "py-0.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavItemBase"], {
                                            href: childItem.href,
                                            badge: childItem.badge,
                                            type: "collapsible-child",
                                            current: activeUrl === childItem.href,
                                            children: childItem.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                                            lineNumber: 52,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, childItem.label, false, {
                                        fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                                        lineNumber: 51,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                                lineNumber: 49,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                            lineNumber: 48,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, item.label, true, {
                    fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                    lineNumber: 35,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "py-0.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$item$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavItemBase"], {
                    type: "link",
                    badge: item.badge,
                    icon: item.icon,
                    href: item.href,
                    current: currentItem?.href === item.href,
                    open: open && currentItem?.href === item.href,
                    children: item.label
                }, void 0, false, {
                    fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                    lineNumber: 70,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, item.label, false, {
                fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
                lineNumber: 69,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/components/application/app-navigation/base-components/nav-list.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarNavigationSimple",
    ()=>SidebarNavigationSimple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/application/app-navigation/base-components/nav-list.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const SidebarNavigationSimple = ({ items, footerItems, featureCard })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex h-screen w-64 flex-col border-r border-gray-200 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavList"], {
                    items: items
                }, void 0, false, {
                    fileName: "[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            (featureCard || footerItems) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 p-4",
                children: [
                    featureCard,
                    footerItems && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$base$2d$components$2f$nav$2d$list$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavList"], {
                        items: footerItems
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx",
                        lineNumber: 25,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx",
                lineNumber: 23,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/base/checkbox/checkbox.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Checkbox",
    ()=>Checkbox,
    "CheckboxBase",
    ()=>CheckboxBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Checkbox$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Checkbox.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const CheckboxBase = ({ className, isSelected, isDisabled, isIndeterminate, size = "sm", isFocusVisible = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("flex size-4 shrink-0 cursor-pointer appearance-none items-center justify-center rounded bg-primary ring-1 ring-primary ring-inset", size === "md" && "size-5 rounded-md", (isSelected || isIndeterminate) && "bg-brand-solid ring-bg-brand-solid", isDisabled && "cursor-not-allowed bg-disabled_subtle ring-disabled", isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 14 14",
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("pointer-events-none absolute h-3 w-2.5 text-fg-white opacity-0 transition-inherit-all", size === "md" && "size-3.5", isIndeterminate && "opacity-100", isDisabled && "text-fg-disabled_subtle"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.91675 7H11.0834",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 14 14",
                fill: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("pointer-events-none absolute size-3 text-fg-white opacity-0 transition-inherit-all", size === "md" && "size-3.5", isSelected && !isIndeterminate && "opacity-100", isDisabled && "text-fg-disabled_subtle"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.6666 3.5L5.24992 9.91667L2.33325 7",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
CheckboxBase.displayName = "CheckboxBase";
const Checkbox = ({ label, hint, size = "sm", className, ...ariaCheckboxProps })=>{
    const sizes = {
        sm: {
            root: "gap-2",
            textWrapper: "",
            label: "text-sm font-medium",
            hint: "text-sm"
        },
        md: {
            root: "gap-3",
            textWrapper: "gap-0.5",
            label: "text-md font-medium",
            hint: "text-md"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Checkbox$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
        ...ariaCheckboxProps,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("flex items-start", state.isDisabled && "cursor-not-allowed", sizes[size].root, typeof className === "function" ? className(state) : className),
        children: ({ isSelected, isIndeterminate, isDisabled, isFocusVisible })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxBase, {
                        size: size,
                        isSelected: isSelected,
                        isIndeterminate: isIndeterminate,
                        isDisabled: isDisabled,
                        isFocusVisible: isFocusVisible,
                        className: label || hint ? "mt-0.5" : ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    (label || hint) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("inline-flex flex-col", sizes[size].textWrapper),
                        children: [
                            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("text-secondary select-none", sizes[size].label),
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                                lineNumber: 107,
                                columnNumber: 39
                            }, ("TURBOPACK compile-time value", void 0)),
                            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("text-tertiary", sizes[size].hint),
                                onClick: (event)=>event.stopPropagation(),
                                children: hint
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                                lineNumber: 109,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/components/base/checkbox/checkbox.tsx",
        lineNumber: 84,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
Checkbox.displayName = "Checkbox";
}),
"[project]/src/components/base/dropdown/dropdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dropdown",
    ()=>Dropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$DotsVertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/DotsVertical.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Header$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Header.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Menu.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Popover.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Separator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Separator.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const DropdownItem = ({ label, children, addon, icon: Icon, unstyled, ...props })=>{
    if (unstyled) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItem"], {
            id: label,
            textValue: label,
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
            lineNumber: 37,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuItem"], {
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("group block cursor-pointer px-1.5 py-px outline-hidden", state.isDisabled && "cursor-not-allowed", typeof props.className === "function" ? props.className(state) : props.className),
        children: (state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative flex items-center rounded-md px-2.5 py-2 outline-focus-ring transition duration-100 ease-linear", !state.isDisabled && "group-hover:bg-primary_hover", state.isFocused && "bg-primary_hover", state.isFocusVisible && "outline-2 -outline-offset-2"),
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        "aria-hidden": "true",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("mr-2 size-4 shrink-0 stroke-[2.25px]", state.isDisabled ? "text-fg-disabled" : "text-fg-quaternary")
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
                        lineNumber: 61,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("grow truncate text-sm font-semibold", state.isDisabled ? "text-disabled" : "text-secondary", state.isFocused && "text-secondary_hover"),
                        children: label || (typeof children === "function" ? children(state) : children)
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    addon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("ml-3 shrink-0 rounded px-1 py-px text-xs font-medium ring-1 ring-secondary ring-inset", state.isDisabled ? "text-disabled" : "text-quaternary"),
                        children: addon
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
                        lineNumber: 78,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const DropdownMenu = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Menu"], {
        disallowEmptySelection: true,
        selectionMode: "single",
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("h-min overflow-y-auto py-1 outline-hidden select-none", typeof props.className === "function" ? props.className(state) : props.className)
    }, void 0, false, {
        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const DropdownPopover = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Popover$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Popover"], {
        placement: "bottom right",
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("w-62 origin-(--trigger-anchor-point) overflow-auto rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt will-change-transform", state.isEntering && "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5", state.isExiting && "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5", typeof props.className === "function" ? props.className(state) : props.className),
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
        lineNumber: 112,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const DropdownSeparator = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Separator$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("my-1 h-px w-full bg-border-secondary", props.className)
    }, void 0, false, {
        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
        lineNumber: 132,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const DropdownDotsButton = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        ...props,
        "aria-label": "Open menu",
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("cursor-pointer rounded-md text-fg-quaternary outline-focus-ring transition duration-100 ease-linear", (state.isPressed || state.isHovered) && "text-fg-quaternary_hover", (state.isPressed || state.isFocusVisible) && "outline-2 outline-offset-2", typeof props.className === "function" ? props.className(state) : props.className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$DotsVertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DotsVertical"], {
            className: "size-5 transition-inherit-all"
        }, void 0, false, {
            fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
            lineNumber: 149,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/base/dropdown/dropdown.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const Dropdown = {
    Root: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuTrigger"],
    Popover: DropdownPopover,
    Menu: DropdownMenu,
    Section: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuSection"],
    SectionHeader: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Header$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"],
    Item: DropdownItem,
    Separator: DropdownSeparator,
    DotsButton: DropdownDotsButton
};
}),
"[project]/src/components/base/tooltip/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$OverlayArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/OverlayArrow.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Tooltip.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const Tooltip = ({ title, description, children, arrow = false, delay = 300, closeDelay = 0, trigger, isDisabled, isOpen, defaultOpen, offset = 6, crossOffset, placement = "top", onOpenChange, ...tooltipProps })=>{
    const isTopOrBottomLeft = [
        "top left",
        "top end",
        "bottom left",
        "bottom end"
    ].includes(placement);
    const isTopOrBottomRight = [
        "top right",
        "top start",
        "bottom right",
        "bottom start"
    ].includes(placement);
    // Set negative cross offset for left and right placement to visually balance the tooltip.
    const calculatedCrossOffset = isTopOrBottomLeft ? -12 : isTopOrBottomRight ? 12 : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
        trigger,
        delay,
        closeDelay,
        isDisabled,
        isOpen,
        defaultOpen,
        onOpenChange,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Tooltip$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                ...tooltipProps,
                offset: offset,
                placement: placement,
                crossOffset: crossOffset ?? calculatedCrossOffset,
                className: ({ isEntering, isExiting })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(isEntering && "ease-out animate-in", isExiting && "ease-in animate-out"),
                children: ({ isEntering, isExiting })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("z-50 flex max-w-xs origin-(--trigger-anchor-point) flex-col items-start gap-1 rounded-lg bg-primary-solid px-3 shadow-lg will-change-transform", description ? "py-3" : "py-2", isEntering && "ease-out animate-in fade-in zoom-in-95 in-placement-left:slide-in-from-right-0.5 in-placement-right:slide-in-from-left-0.5 in-placement-top:slide-in-from-bottom-0.5 in-placement-bottom:slide-in-from-top-0.5", isExiting && "ease-in animate-out fade-out zoom-out-95 in-placement-left:slide-out-to-right-0.5 in-placement-right:slide-out-to-left-0.5 in-placement-top:slide-out-to-bottom-0.5 in-placement-bottom:slide-out-to-top-0.5"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-tooltip-supporting-text",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                                lineNumber: 82,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0)),
                            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$OverlayArrow$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OverlayArrow"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 100 100",
                                    className: "size-2.5 fill-bg-primary-solid in-placement-left:-rotate-90 in-placement-right:rotate-90 in-placement-top:rotate-0 in-placement-bottom:rotate-180",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,0 L35.858,35.858 Q50,50 64.142,35.858 L100,0 Z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                                        lineNumber: 90,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                                    lineNumber: 86,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                                lineNumber: 85,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const TooltipTrigger = ({ children, className, ...buttonProps })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        ...buttonProps,
        className: (values)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("h-max w-max outline-hidden", typeof className === "function" ? className(values) : className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/base/tooltip/tooltip.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/application/table/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableCard",
    ()=>TableCard,
    "TableRowActionsDropdown",
    ()=>TableRowActionsDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$ArrowDown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/ArrowDown.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$ChevronSelectorVertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/ChevronSelectorVertical.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Copy01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/Copy01.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Edit01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/Edit01.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$HelpCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/HelpCircle.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Trash01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/Trash01.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Table.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$collections$2f$dist$2f$CollectionBuilder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-aria/collections/dist/CollectionBuilder.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/badges/badges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$checkbox$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/checkbox/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/dropdown/dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$tooltip$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/tooltip/tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const TableRowActionsDropdown = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].Root, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].DotsButton, {}, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].Popover, {
                className: "w-min",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].Menu, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].Item, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Edit01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Edit01"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pr-4",
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 37,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/application/table/table.tsx",
                            lineNumber: 36,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].Item, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Copy01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Copy01"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pr-4",
                                children: "Copy link"
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/application/table/table.tsx",
                            lineNumber: 39,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$dropdown$2f$dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"].Item, {
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Trash01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trash01"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pr-4",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/application/table/table.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/application/table/table.tsx",
                    lineNumber: 35,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const TableContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    size: "md"
});
const TableCardRoot = ({ children, className, size = "md", ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableContext.Provider, {
        value: {
            size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-secondary", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/application/table/table.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const TableCardHeader = ({ title, badge, description, contentTrailing, className })=>{
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TableContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative flex flex-col items-start gap-4 border-b border-secondary bg-primary px-4 md:flex-row", size === "sm" ? "py-4 md:px-5" : "py-5 md:px-6", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("font-semibold text-primary", size === "sm" ? "text-md" : "text-lg"),
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 88,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(badge) ? badge : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                color: "brand",
                                size: "sm",
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 93,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-tertiary",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 99,
                        columnNumber: 33
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            contentTrailing
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const TableRoot = ({ className, size = "md", ...props })=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TableContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableContext.Provider, {
        value: {
            size: context?.size ?? size
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("w-full overflow-x-hidden", typeof className === "function" ? className(state) : className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/application/table/table.tsx",
            lineNumber: 115,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 114,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
TableRoot.displayName = "Table";
const TableHeader = ({ columns, children, bordered = true, className, ...props })=>{
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TableContext);
    const { selectionBehavior, selectionMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTableOptions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative bg-secondary", size === "sm" ? "h-9" : "h-11", // Row border—using an "after" pseudo-element to avoid the border taking up space.
            bordered && "[&>tr>th]:after:pointer-events-none [&>tr>th]:after:absolute [&>tr>th]:after:inset-x-0 [&>tr>th]:after:bottom-0 [&>tr>th]:after:h-px [&>tr>th]:after:bg-border-secondary [&>tr>th]:focus-visible:after:bg-transparent", typeof className === "function" ? className(state) : className),
        children: [
            selectionBehavior === "toggle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative py-2 pr-0 pl-4", size === "sm" ? "w-9 md:pl-5" : "w-11 md:pl-6"),
                children: selectionMode === "multiple" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$checkbox$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                        slot: "selection",
                        size: size
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 153,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/application/table/table.tsx",
                    lineNumber: 152,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 150,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$collections$2f$dist$2f$CollectionBuilder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Collection"], {
                items: columns,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
TableHeader.displayName = "TableHeader";
const TableHead = ({ className, tooltip, label, children, ...props })=>{
    const { selectionBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTableOptions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative p-0 px-6 py-2 outline-hidden focus-visible:z-1 focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-bg-primary focus-visible:ring-inset", selectionBehavior === "toggle" && "nth-2:pl-3", state.allowsSorting && "cursor-pointer", typeof className === "function" ? className(state) : className),
        children: (state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold whitespace-nowrap text-quaternary",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 188,
                                columnNumber: 35
                            }, ("TURBOPACK compile-time value", void 0)),
                            typeof children === "function" ? children(state) : children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 187,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$tooltip$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                        title: tooltip,
                        placement: "top",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$tooltip$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                            className: "cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$HelpCircle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HelpCircle"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/application/table/table.tsx",
                                lineNumber: 195,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/application/table/table.tsx",
                            lineNumber: 194,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 193,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    state.allowsSorting && (state.sortDirection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$ArrowDown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("size-3 stroke-[3px] text-fg-quaternary", state.sortDirection === "ascending" && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 202,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$ChevronSelectorVertical$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronSelectorVertical"], {
                        size: 12,
                        strokeWidth: 3,
                        className: "text-fg-quaternary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 204,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 186,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 174,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
TableHead.displayName = "TableHead";
const TableRow = ({ columns, children, className, highlightSelectedRow = true, ...props })=>{
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TableContext);
    const { selectionBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTableOptions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Row"], {
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative outline-focus-ring transition-colors after:pointer-events-none hover:bg-secondary focus-visible:outline-2 focus-visible:-outline-offset-2", size === "sm" ? "h-14" : "h-18", highlightSelectedRow && "selected:bg-secondary", // Row border—using an "after" pseudo-element to avoid the border taking up space.
            "[&>td]:after:absolute [&>td]:after:inset-x-0 [&>td]:after:bottom-0 [&>td]:after:h-px [&>td]:after:w-full [&>td]:after:bg-border-secondary last:[&>td]:after:hidden [&>td]:focus-visible:after:opacity-0 focus-visible:[&>td]:after:opacity-0", typeof className === "function" ? className(state) : className),
        children: [
            selectionBehavior === "toggle" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative py-2 pr-0 pl-4", size === "sm" ? "md:pl-5" : "md:pl-6"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$checkbox$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                        slot: "selection",
                        size: size
                    }, void 0, false, {
                        fileName: "[project]/src/components/application/table/table.tsx",
                        lineNumber: 242,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/application/table/table.tsx",
                    lineNumber: 241,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 240,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$collections$2f$dist$2f$CollectionBuilder$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Collection"], {
                items: columns,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/application/table/table.tsx",
                lineNumber: 246,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 224,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
TableRow.displayName = "TableRow";
const TableCell = ({ className, children, ...props })=>{
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TableContext);
    const { selectionBehavior } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTableOptions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cell"], {
        ...props,
        className: (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("relative text-sm text-tertiary outline-focus-ring focus-visible:z-1 focus-visible:outline-2 focus-visible:-outline-offset-2", size === "sm" && "px-5 py-3", size === "md" && "px-6 py-4", selectionBehavior === "toggle" && "nth-2:pl-3", typeof className === "function" ? className(state) : className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/application/table/table.tsx",
        lineNumber: 262,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
TableCell.displayName = "TableCell";
const TableCard = {
    Root: TableCardRoot,
    Header: TableCardHeader
};
const Table = TableRoot;
Table.Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"];
Table.Cell = TableCell;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;
;
}),
"[project]/src/utils/is-react-component.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* We cannot use type `unknown` instead of `any` here because it will break the type assertion `isReactComponent` function is providing. */ /* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "isClassComponent",
    ()=>isClassComponent,
    "isForwardRefComponent",
    ()=>isForwardRefComponent,
    "isFunctionComponent",
    ()=>isFunctionComponent,
    "isReactComponent",
    ()=>isReactComponent
]);
const isFunctionComponent = (component)=>{
    return typeof component === "function";
};
const isClassComponent = (component)=>{
    return typeof component === "function" && component.prototype && (!!component.prototype.isReactComponent || !!component.prototype.render);
};
const isForwardRefComponent = (component)=>{
    return typeof component === "object" && component !== null && component.$$typeof.toString() === "Symbol(react.forward_ref)";
};
const isReactComponent = (component)=>{
    return isFunctionComponent(component) || isForwardRefComponent(component) || isClassComponent(component);
};
}),
"[project]/src/components/base/buttons/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "styles",
    ()=>styles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Button.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-aria-components/dist/Link.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/cx.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$is$2d$react$2d$component$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/is-react-component.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sortCx"])({
    common: {
        root: [
            "group relative inline-flex h-max cursor-pointer items-center justify-center whitespace-nowrap outline-brand transition duration-100 ease-linear before:absolute focus-visible:outline-2 focus-visible:outline-offset-2",
            // When button is used within `InputGroup`
            "in-data-input-wrapper:shadow-xs in-data-input-wrapper:focus:!z-50 in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-leading:before:rounded-r-none in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-trailing:before:rounded-l-none",
            // Disabled styles
            "disabled:cursor-not-allowed disabled:text-fg-disabled",
            // Icon styles
            "disabled:*:data-icon:text-fg-disabled_subtle",
            // Same as `icon` but for SSR icons that cannot be passed to the client as functions.
            "*:data-icon:pointer-events-none *:data-icon:size-5 *:data-icon:shrink-0 *:data-icon:transition-inherit-all"
        ].join(" "),
        icon: "pointer-events-none size-5 shrink-0 transition-inherit-all"
    },
    sizes: {
        sm: {
            root: [
                "gap-1 rounded-lg px-3 py-2 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2",
                "in-data-input-wrapper:px-3.5 in-data-input-wrapper:py-2.5 in-data-input-wrapper:data-icon-only:p-2.5"
            ].join(" "),
            linkRoot: "gap-1"
        },
        md: {
            root: [
                "gap-1 rounded-lg px-3.5 py-2.5 text-sm font-semibold before:rounded-[7px] data-icon-only:p-2.5",
                "in-data-input-wrapper:gap-1.5 in-data-input-wrapper:px-4 in-data-input-wrapper:text-md in-data-input-wrapper:data-icon-only:p-3"
            ].join(" "),
            linkRoot: "gap-1"
        },
        lg: {
            root: "gap-1.5 rounded-lg px-4 py-2.5 text-md font-semibold before:rounded-[7px] data-icon-only:p-3",
            linkRoot: "gap-1.5"
        },
        xl: {
            root: "gap-1.5 rounded-lg px-4.5 py-3 text-md font-semibold before:rounded-[7px] data-icon-only:p-3.5",
            linkRoot: "gap-1.5"
        }
    },
    colors: {
        primary: {
            root: [
                "bg-brand-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent ring-inset hover:bg-brand-solid_hover data-loading:bg-brand-solid_hover",
                // Inner border gradient
                "before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
                // Disabled styles
                "disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle",
                // Icon styles
                "*:data-icon:text-button-primary-icon hover:*:data-icon:text-button-primary-icon_hover"
            ].join(" ")
        },
        secondary: {
            root: [
                "bg-primary text-secondary shadow-xs-skeumorphic ring-1 ring-primary ring-inset hover:bg-primary_hover hover:text-secondary_hover data-loading:bg-primary_hover",
                // Disabled styles
                "disabled:shadow-xs disabled:ring-disabled_subtle",
                // Icon styles
                "*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover"
            ].join(" ")
        },
        tertiary: {
            root: [
                "text-tertiary hover:bg-primary_hover hover:text-tertiary_hover data-loading:bg-primary_hover",
                // Icon styles
                "*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover"
            ].join(" ")
        },
        "link-gray": {
            root: [
                "justify-normal rounded p-0! text-tertiary hover:text-tertiary_hover",
                // Inner text underline
                "*:data-text:underline *:data-text:decoration-transparent *:data-text:underline-offset-2 hover:*:data-text:decoration-current",
                // Icon styles
                "*:data-icon:text-fg-quaternary hover:*:data-icon:text-fg-quaternary_hover"
            ].join(" ")
        },
        "link-color": {
            root: [
                "justify-normal rounded p-0! text-brand-secondary hover:text-brand-secondary_hover",
                // Inner text underline
                "*:data-text:underline *:data-text:decoration-transparent *:data-text:underline-offset-2 hover:*:data-text:decoration-current",
                // Icon styles
                "*:data-icon:text-fg-brand-secondary_alt hover:*:data-icon:text-fg-brand-secondary_hover"
            ].join(" ")
        },
        "primary-destructive": {
            root: [
                "bg-error-solid text-white shadow-xs-skeumorphic ring-1 ring-transparent outline-error ring-inset",
                // Inner border gradient
                "before:absolute before:inset-px before:border before:border-white/12 before:mask-b-from-0%",
                // Disabled styles
                "disabled:bg-disabled disabled:shadow-xs disabled:ring-disabled_subtle",
                // Icon styles
                "*:data-icon:text-button-destructive-primary-icon hover:*:data-icon:text-button-destructive-primary-icon_hover"
            ].join(" ")
        },
        "secondary-destructive": {
            root: [
                "bg-primary text-error-primary shadow-xs-skeumorphic ring-1 ring-error_subtle outline-error ring-inset hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary",
                // Disabled styles
                "disabled:bg-primary disabled:shadow-xs disabled:ring-disabled_subtle",
                // Icon styles
                "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary"
            ].join(" ")
        },
        "tertiary-destructive": {
            root: [
                "text-error-primary outline-error hover:bg-error-primary hover:text-error-primary_hover data-loading:bg-error-primary",
                // Icon styles
                "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary"
            ].join(" ")
        },
        "link-destructive": {
            root: [
                "justify-normal rounded p-0! text-error-primary outline-error hover:text-error-primary_hover",
                // Inner text underline
                "*:data-text:underline *:data-text:decoration-transparent *:data-text:underline-offset-2 hover:*:data-text:decoration-current",
                // Icon styles
                "*:data-icon:text-fg-error-secondary hover:*:data-icon:text-fg-error-primary"
            ].join(" ")
        }
    }
});
const Button = ({ size = "sm", color = "primary", children, className, noTextPadding, iconLeading: IconLeading, iconTrailing: IconTrailing, isDisabled: disabled, isLoading: loading, showTextWhileLoading, ...otherProps })=>{
    const href = "href" in otherProps ? otherProps.href : undefined;
    const Component = href ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$aria$2d$components$2f$dist$2f$Button$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"];
    const isIcon = (IconLeading || IconTrailing) && !children;
    const isLinkType = [
        "link-gray",
        "link-color",
        "link-destructive"
    ].includes(color);
    noTextPadding = isLinkType || noTextPadding;
    let props = {};
    if (href) {
        props = {
            ...otherProps,
            href: disabled ? undefined : href,
            // Since anchor elements do not support the `disabled` attribute and state,
            // we need to specify `data-rac` and `data-disabled` in order to be able
            // to use the `disabled:` selector in classes.
            ...disabled ? {
                "data-rac": true,
                "data-disabled": true
            } : {}
        };
    } else {
        props = {
            ...otherProps,
            type: otherProps.type || "button",
            isPending: loading,
            isDisabled: disabled
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        "data-loading": loading ? true : undefined,
        "data-icon-only": isIcon ? true : undefined,
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(styles.common.root, styles.sizes[size].root, styles.colors[color].root, isLinkType && styles.sizes[size].linkRoot, (loading || href && (disabled || loading)) && "pointer-events-none", // If in `loading` state, hide everything except the loading icon (and text if `showTextWhileLoading` is true).
        loading && (showTextWhileLoading ? "[&>*:not([data-icon=loading]):not([data-text])]:hidden" : "[&>*:not([data-icon=loading])]:invisible"), className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconLeading) && IconLeading,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$is$2d$react$2d$component$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactComponent"])(IconLeading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconLeading, {
                "data-icon": "leading",
                className: styles.common.icon
            }, void 0, false, {
                fileName: "[project]/src/components/base/buttons/button.tsx",
                lineNumber: 235,
                columnNumber: 47
            }, ("TURBOPACK compile-time value", void 0)),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                fill: "none",
                "data-icon": "loading",
                viewBox: "0 0 20 20",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])(styles.common.icon, !showTextWhileLoading && "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "stroke-current opacity-30",
                        cx: "10",
                        cy: "10",
                        r: "8",
                        fill: "none",
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/buttons/button.tsx",
                        lineNumber: 245,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "origin-center animate-spin stroke-current",
                        cx: "10",
                        cy: "10",
                        r: "8",
                        fill: "none",
                        strokeWidth: "2",
                        strokeDasharray: "12.5 50",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/base/buttons/button.tsx",
                        lineNumber: 247,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/base/buttons/button.tsx",
                lineNumber: 238,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "data-text": true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$cx$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cx"])("transition-inherit-all", !noTextPadding && "px-0.5"),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/base/buttons/button.tsx",
                lineNumber: 261,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"])(IconTrailing) && IconTrailing,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$is$2d$react$2d$component$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReactComponent"])(IconTrailing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconTrailing, {
                "data-icon": "trailing",
                className: styles.common.icon
            }, void 0, false, {
                fileName: "[project]/src/components/base/buttons/button.tsx",
                lineNumber: 268,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/base/buttons/button.tsx",
        lineNumber: 218,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/data/orders.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"items":[{"id":"ORD-001","customer":"Olivia Rhye","size":"250 kvm","status":"pending","product":"Wireless Headphones","quantity":2,"total":"$199.98"},{"id":"ORD-002","customer":"Phoenix Baker","size":"100 kvm","status":"completed","product":"Smart Watch","quantity":1,"total":"$299.99"},{"id":"ORD-003","customer":"Lana Steiner","size":"320 kvm","status":"shipped","product":"Laptop Stand","quantity":3,"total":"$89.97"},{"id":"ORD-004","customer":"Demi Wilkinson","size":"150 kvm","status":"pending","product":"USB-C Cable","quantity":5,"total":"$49.95"},{"id":"ORD-005","customer":"Candice Wu","size":"180 kvm","status":"completed","product":"Keyboard","quantity":1,"total":"$149.99"}]});}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$BarChartSquare02$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/BarChartSquare02.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$HomeLine$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/HomeLine.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$LogOut01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/LogOut01.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Rows01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/Rows01.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Settings01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@untitledui/icons/dist/Settings01.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$sidebar$2d$navigation$2f$sidebar$2d$simple$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/application/app-navigation/sidebar-navigation/sidebar-simple.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/application/table/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/badges/badges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$buttons$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/base/buttons/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$orders$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/orders.json (json)");
"use client";
;
;
;
;
;
;
;
;
const navItemsSimple = [
    {
        label: "Lager",
        href: "/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$HomeLine$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HomeLine"],
        items: [
            {
                label: "Lagerordrar",
                href: "/overview"
            },
            {
                label: "Lagerlista",
                href: "/products"
            },
            {
                label: "Lagerinställningar",
                href: "/orders"
            }
        ]
    },
    {
        label: "Fakturering",
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$BarChartSquare02$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChartSquare02"],
        items: [
            {
                label: "Fakturakö",
                href: "/dashboard/overview"
            },
            {
                label: "Fakturaunderlag",
                href: "/dashboard/notifications"
            },
            {
                label: "Historik",
                href: "/dashboard/analytics"
            }
        ]
    },
    {
        label: "Kunder",
        href: "/projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Rows01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Rows01"]
    }
];
function Home() {
    const [sortDescriptor, setSortDescriptor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        column: "id",
        direction: "ascending"
    });
    const sortedItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$orders$2e$json__$28$json$29$__["default"].items.sort((a, b)=>{
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
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
    }, [
        sortDescriptor
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$app$2d$navigation$2f$sidebar$2d$navigation$2f$sidebar$2d$simple$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarNavigationSimple"], {
                items: navItemsSimple,
                footerItems: [
                    {
                        label: "Inställningar",
                        href: "/settings",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$Settings01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Settings01"]
                    },
                    {
                        label: "Log out",
                        href: "/logout",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$untitledui$2f$icons$2f$dist$2f$LogOut01$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogOut01"]
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto bg-white p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-between items-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-display-sm font-semibold",
                                children: "Lagerordrar"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$buttons$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                color: "primary",
                                children: "Skapa leverans"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCard"].Root, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCard"].Header, {
                                title: "Orders",
                                badge: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$orders$2e$json__$28$json$29$__["default"].items.length} orders`
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                                "aria-label": "Orders",
                                selectionMode: "multiple",
                                sortDescriptor: sortDescriptor,
                                onSortChange: setSortDescriptor,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Header, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Head, {
                                                id: "customer",
                                                label: "Customer",
                                                isRowHeader: true,
                                                allowsSorting: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Head, {
                                                id: "size",
                                                label: "Storlek",
                                                allowsSorting: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Head, {
                                                id: "quantity",
                                                label: "Quantity",
                                                allowsSorting: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Head, {
                                                id: "total",
                                                label: "Total",
                                                allowsSorting: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Head, {
                                                id: "status",
                                                label: "Status",
                                                allowsSorting: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Body, {
                                        items: sortedItems,
                                        children: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Row, {
                                                id: item.id,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Cell, {
                                                        className: "font-medium",
                                                        children: item.customer
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Cell, {
                                                        children: item.size
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Cell, {
                                                        children: item.quantity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Cell, {
                                                        children: item.total
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$application$2f$table$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Cell, {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$base$2f$badges$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BadgeWithDot"], {
                                                            size: "sm",
                                                            color: item.status === "completed" ? "success" : item.status === "shipped" ? "brand" : "warning",
                                                            type: "modern",
                                                            children: item.status.charAt(0).toUpperCase() + item.status.slice(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 33
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 88,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d483a274._.js.map