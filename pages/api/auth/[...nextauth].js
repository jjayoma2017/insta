import NextAuth from 'next-auth';
import GooogleProvider from 'next-auth/providers/google';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GooogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  secret: process.env.SECRET,

  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
