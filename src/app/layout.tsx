import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getSession } from 'next-auth/react';

import {} from 'next-auth';

import SessionProvider from '@/context/SessionProvider';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { ParticleHeader } from '@/components/ParticleHeader';
import { AppWrapper } from '@/components/AppWrapper/AppWrapper';

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
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen flex flex-col min-w-fit`}
      >
        <AppWrapper>
          {children}
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
