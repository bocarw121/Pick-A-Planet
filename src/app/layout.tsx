import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppWrapper } from "'@/components/AppWrapper'";
import { AuthProvider } from "'@/context/AuthContext'";
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pick A Planet',
  description: 'Displays nine planets including Pluto',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
