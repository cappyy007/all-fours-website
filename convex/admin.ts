import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { auth } from "./auth";

// Helper to check if the current user is an admin
async function isAdmin(ctx: any) {
    const userId = await auth.getUserId(ctx);
    if (!userId) return false;

    const user = await ctx.db.get(userId);
    return user?.role === "admin";
}

export const checkAdminAccess = query({
    args: {},
    handler: async (ctx) => {
        return await isAdmin(ctx);
    },
});

export const listUsers = query({
    args: {},
    handler: async (ctx) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        return await ctx.db.query("users").collect();
    },
});

export const updateUserRole = mutation({
    args: { userId: v.id("users"), role: v.string() },
    handler: async (ctx, args) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        await ctx.db.patch(args.userId, { role: args.role });
    },
});

export const deleteUser = mutation({
    args: { userId: v.id("users") },
    handler: async (ctx, args) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        await ctx.db.delete(args.userId);
    },
});
