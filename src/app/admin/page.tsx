"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Package, DollarSign, Activity } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function AdminDashboardPage() {
    const users = useQuery(api.admin.listUsers);
    const products = useQuery(api.admin.listProducts);

    const stats = [
        {
            title: "Total Users",
            value: users?.length?.toString() || "...",
            icon: Users,
            description: "+2 since last hour",
        },
        {
            title: "Total Products",
            value: products?.length?.toString() || "...",
            icon: Package,
            description: "+5 new products",
        },
        {
            title: "Revenue",
            value: "$12,345",
            icon: DollarSign,
            description: "+15% from last month",
        },
        {
            title: "Active Now",
            value: "573",
            icon: Activity,
            description: "+201 since last hour",
        },
    ];

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            No recent sales to display.
                        </p>
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            No recent activity.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
