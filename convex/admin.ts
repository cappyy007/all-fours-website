import { query, mutation, QueryCtx, MutationCtx } from "./_generated/server";
import { v } from "convex/values";
import { auth } from "./auth";

// Helper to check if the current user is an admin
async function isAdmin(ctx: QueryCtx | MutationCtx) {
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

// Product Operations

export const listProducts = query({
    args: {},
    handler: async (ctx) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        return await ctx.db.query("products").collect();
    },
});

export const createProduct = mutation({
    args: {
        name: v.string(),
        description: v.optional(v.string()),
        price: v.number(),
        category: v.string(),
        stock: v.number(),
        image: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        await ctx.db.insert("products", args);
    },
});

export const updateProduct = mutation({
    args: {
        id: v.id("products"),
        name: v.optional(v.string()),
        description: v.optional(v.string()),
        price: v.optional(v.number()),
        category: v.optional(v.string()),
        stock: v.optional(v.number()),
        image: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        const { id, ...fields } = args;
        await ctx.db.patch(id, fields);
    },
});

export const deleteProduct = mutation({
    args: { id: v.id("products") },
    handler: async (ctx, args) => {
        const isUserAdmin = await isAdmin(ctx);
        if (!isUserAdmin) {
            throw new Error("Unauthorized: Admin access required");
        }

        await ctx.db.delete(args.id);
    },
});
