import { internalMutation } from "./_generated/server";

export const addAdminRole = internalMutation({
    args: {},
    handler: async (ctx) => {
        // Get the first user
        const user = await ctx.db.query("users").first();

        if (user) {
            await ctx.db.patch(user._id, { role: "admin" });
            console.log(`Updated user ${user.name} (${user._id}) to admin role.`);
            return `Updated user ${user.name} to admin. Check Dashboard now.`;
        } else {
            console.log("No users found.");
            return "No users found to update.";
        }
    },
});
