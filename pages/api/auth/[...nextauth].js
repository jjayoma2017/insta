import NextAuth from 'next-auth';
import GooogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GooogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
