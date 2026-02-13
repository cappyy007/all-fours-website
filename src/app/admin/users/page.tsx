"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Check if badge exists or use basic span

export default function UsersPage() {
    const users = useQuery(api.admin.listUsers);
    const updateUserRole = useMutation(api.admin.updateUserRole);
    const deleteUser = useMutation(api.admin.deleteUser);
    const [loadingId, setLoadingId] = useState<Id<"users"> | null>(null);

    if (users === undefined) {
        return <div className="text-center p-10">Loading users...</div>;
    }

    const handleRoleChange = async (userId: Id<"users">, newRole: string) => {
        setLoadingId(userId);
        try {
            await updateUserRole({ userId, role: newRole });
        } catch (error) {
            console.error("Failed to update role:", error);
            alert("Failed to update role");
        } finally {
            setLoadingId(null);
        }
    };

    const handleDelete = async (userId: Id<"users">) => {
        if (!confirm("Are you sure you want to delete this user?")) return;
        setLoadingId(userId);
        try {
            await deleteUser({ userId });
        } catch (error) {
            console.error("Failed to delete user:", error);
            alert("Failed to delete user");
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Users</h1>
                <Button>Add User</Button> {/* Placeholder for now */}
            </div>

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[80px]">Avatar</TableHead>
                            <TableHead>Namr</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={user.image} alt={user.name} />
                                        <AvatarFallback>{user.name?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell className="font-medium">{user.name || "Anonymous"}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    {user.role === "admin" ? (
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                                            Admin
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                            User
                                        </span>
                                    )}
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                            <DropdownMenuItem
                                                onClick={() => navigator.clipboard.writeText(user._id)}
                                            >
                                                Copy User ID
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={() => handleRoleChange(user._id, user.role === "admin" ? "user" : "admin")}>
                                                {user.role === "admin" ? "Demote to User" : "Promote to Admin"}
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onClick={() => handleDelete(user._id)}
                                                className="text-red-600"
                                            >
                                                Delete User
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
