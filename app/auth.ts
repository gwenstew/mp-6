import NextAuth from "next-auth";
import Github from "@auth/core/providers/github";

export const {handlers, auth}=NextAuth(
    {
        providers: [
            Github({
                clientId: process.env.GITHUB_ID!,
                clientSecret: process.env.GITHUB_SECRET!,
            }),
        ],
    }
);
