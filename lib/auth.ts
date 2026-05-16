import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { compare } from 'bcrypt';
import { getServerSession, type AuthOptions, type Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from './prisma';

const nextAuthSecret = process.env.NEXTAUTH_SECRET;

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: nextAuthSecret ?? undefined,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  pages: {
    signIn: '/login',
    error: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      const user = await prisma.user.findUnique({ where: { email: session.user?.email ?? '' } });
      session.user = {
        ...session.user,
        id: user?.id,
        role: (user?.role ?? 'USER') as 'ADMIN' | 'USER'
      };
      return session;
    }
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({ where: { email: credentials.email } });
        if (!user) return null;

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: (user.role === 'ADMIN' ? 'ADMIN' : 'USER') as 'ADMIN' | 'USER'
        };
      }
    })
  ]
};

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
