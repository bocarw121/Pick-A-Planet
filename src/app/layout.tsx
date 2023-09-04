import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppWrapper } from "'@/components/AppWrapper'";
import { getServerSession } from 'next-auth';
import { User } from "'@/types'";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pick A Planet',
  description: 'Displays nine planets including Pluto',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper user={session?.user as User}>{children}</AppWrapper>
      </body>
    </html>
  );
}
