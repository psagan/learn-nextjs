import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Roboto } from 'next/font/google'


import { Geist } from 'next/font/google'
const geist = Geist({
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
