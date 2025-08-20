import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ClientProviders from './client-providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatGPT-AI Chat Assistant',
  description: 'Beautiful mobile-first ChatGPT clone with dark theme, chat bubbles, and smooth animations',
  authors: [{ name: 'Salman Ahmad' }],
  icons:{
    icon:'/favicon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}