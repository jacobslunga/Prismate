import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: "openid email profile",
          access_type: "offline",
          prompt: "consent",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!account || !user.email) {
        return false;
      }

      const existingUser = await db.user.findUnique({
        where: { email: user.email },
      });

      if (!existingUser) {
        await db.user.create({
          data: {
            email: user.email,
            name: user.name || user.email,
            image: user.image || null,
          },
        });
      }

      return true;
    },
    async jwt({ token, user, account }: { [key: string]: any }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at * 1000;
        token.id = user.id;
      }

      if (Date.now() < token.accessTokenExpires) {
        return token;
      }

      return refreshAccessToken(token);
    },
    async session({ session, token }: { [key: string]: any }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.expiresAt = token.accessTokenExpires;
      session.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};

type Token = {
  accessToken: string;
  accessTokenExpires: number;
  refreshToken: string;
  id: string;
  error?: string;
};

async function refreshAccessToken(token: Token) {
  try {
    const url = "https://oauth2.googleapis.com/token";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
