import NextAuth from "next-auth";
import "next-auth/jwt";
import Github from "@auth/core/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/db";


export const { handlers, auth, signIn, signOut } = NextAuth(
    {
        adapter: MongoDBAdapter(client),
        providers: [
            Github({
                clientId: process.env.GITHUB_ID!,
                clientSecret: process.env.GITHUB_SECRET!,
            }),
        ],
        basePath: "/auth",
        session: {
            strategy: "database",
            //session expiry
            maxAge: 24 * 60 * 60,
        },
        callbacks: {
            async session({ session, user }) {
                session.user.id = user.id;
                session.user.name = session.user.name;
                session.user.email = session.user.email;
                session.user.image = user.image;
            
                return session;
            },
            // async session({ session, token }) {
            //     if (token?.accessToken) {
            //         session.accessToken = token.accessToken;
            //     }
            //     return session;
            // },
        },
});


// declare module "next-auth" {
//     interface Session {
//       accessToken?: string
//     }
//   }
  
//   declare module "next-auth/jwt" {
//     interface JWT {
//       accessToken?: string
//     }
//   }


