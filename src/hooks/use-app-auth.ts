"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function useAppAuth() {
    const authActions = useAuthActions();
    const signOut = authActions?.signOut;
    const signIn = authActions?.signIn;

    // @ts-ignore
    const user = useQuery(api.users.viewer);

    const loading = user === undefined;


    return {
        user,
        signIn: async (email: string, password: string) => {
            console.log("useAppAuth: signIn called", { email, hasSignIn: !!signIn });
            if (!signIn) {
                console.error("useAppAuth: signIn action is missing!");
                return;
            }
            return await signIn("password", { email, password, flow: "signIn" });
        },
        signUp: async (email: string, password: string) => {
            console.log("useAppAuth: signUp called", { email, hasSignIn: !!signIn });
            if (!signIn) {
                console.error("useAppAuth: signUp action (signIn) is missing!");
                return;
            }
            return await signIn("password", { email, password, flow: "signUp" });
        },
        signOut: async () => {
            console.log("useAppAuth: signOut called");
            return await signOut?.();
        },
        loading,
        isLoading: loading,
    };
}
