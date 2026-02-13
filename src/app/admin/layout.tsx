"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const checkAdmin = useQuery(api.admin.checkAdminAccess);
    const router = useRouter();

    useEffect(() => {
        if (checkAdmin === false) {
            router.push("/");
        }
    }, [checkAdmin, router]);

    if (checkAdmin === undefined) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <div className="text-xl font-semibold text-gray-600">Loading admin access...</div>
            </div>
        );
    }

    if (!checkAdmin) {
        return null; // Will redirect
    }

    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            <aside className="w-full bg-slate-900 p-6 text-white md:w-64 flex-shrink-0">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight">Admin</h2>
                    <p className="text-sm text-slate-400">Control Panel</p>
                </div>
                <nav className="flex flex-col gap-2">
                    <Link
                        href="/admin"
                        className="rounded px-3 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/admin/users"
                        className="rounded px-3 py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
                    >
                        User Management
                    </Link>
                    <div className="my-4 border-t border-slate-700"></div>
                    <Link
                        href="/"
                        className="rounded px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
                    >
                        &larr; Back to Site
                    </Link>
                </nav>
            </aside>
            <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
                <div className="mx-auto max-w-6xl">
                    {children}
                </div>
            </main>
        </div>
    );
}
