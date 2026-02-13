"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

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
        <div className="flex h-screen w-full bg-slate-50">
            <AdminSidebar />
            <div className="flex flex-1 flex-col pl-64 transition-all duration-300">
                <AdminHeader />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
