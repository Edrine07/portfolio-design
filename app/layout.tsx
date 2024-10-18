import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

import { ReactLenis } from '@/app/utils/lenis';


const inter = localFont({ src: './assets/fonts/Inter.ttf'})

export const metadata: Metadata = {
  title: "Edrine Hagosojos | Software Developer & UI/UX Designer",
  description: "This my portfolio showcasing my works!!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ReactLenis root>
      <body className={inter.className}>
        {children}
      </body>
    </ReactLenis>
    </html>
  );
}


