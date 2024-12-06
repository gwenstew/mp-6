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
            strategy: "jwt",
        },
        callbacks: {
            async jwt({ token, trigger, session, account, profile }) {
                // When user initially signs in
                if (account?.provider === "github" && profile) {
                  token.id = profile.id; 
                  token.name = profile.name; 
                  token.email = profile.email; 
                  //token.picture = profile.avatar_url; 
                  token.accessToken = account.access_token; 
                }
            
                //session updates
                if (trigger === "update" && session?.user) {
                  token.name = session.user.name;
                }
            
                return token;
            },
            async session({ session, token }) {
                if (token?.accessToken) {
                    session.accessToken = token.accessToken;
                }
                return session;
            },
        },
});


declare module "next-auth" {
    interface Session {
      accessToken?: string
    }
  }
  
  declare module "next-auth/jwt" {
    interface JWT {
      accessToken?: string
    }
  }


