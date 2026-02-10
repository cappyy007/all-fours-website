import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  // Add any custom tables or extend users if needed
  // For now, authTables already includes a standard users table
});
