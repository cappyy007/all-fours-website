"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

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
                <h1 className="text-3xl font-bold text-gray-900">Users</h1>
                <span className="text-sm text-gray-500">{users.length} users found</span>
            </div>

            <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <Avatar className="h-8 w-8 mr-3">
                                            <AvatarImage src={user.image} alt={user.name} />
                                            <AvatarFallback>{user.name?.charAt(0).toUpperCase() || "?"}</AvatarFallback>
                                        </Avatar>
                                        <div className="text-sm font-medium text-gray-900">{user.name || "Anonymous"}</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.email || "No email"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <select
                                        value={user.role || "user"}
                                        onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                        disabled={loadingId === user._id}
                                        className="block w-full rounded-md border-gray-300 py-1.5 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm sm:leading-6 border px-2"
                                    >
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => handleDelete(user._id)}
                                        disabled={loadingId === user._id}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
