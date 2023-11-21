import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        LinkedInProvider({
            clientId: process.env.LINKEDIN_CLIENT_ID,
            clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
            authorization: {
                params: { scope: "openid profile email" },
            },
            issuer: 'https://www.linkedin.com',
            jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
            profile(profile, tokens) {
                const defaultImage =
                'https://cdn-icons-png.flaticon.com/512/174/174857.png';
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture ?? defaultImage,
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
    pages: {
        signIn: '/sign-in',
        //signOut: '/auth/signout',
        //error: '/auth/error', // Error code passed in query string as ?error=
        //verifyRequest: '/auth/verify-request', // (used for check email message)
        //newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
}

const handler = NextAuth(authOptions);



export { handler as GET, handler as POST }