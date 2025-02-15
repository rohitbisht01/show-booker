import type { Metadata } from 'next'
import { Recursive } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { TRPCReactProvider } from '@/trpc/clients/client'

const recursive = Recursive({
  subsets: ['latin'], // Ensures support for Latin characters
  weight: ['300', '400', '500', '600', '700', '800', '900'], // Loads all available weights
  display: 'swap', // Ensures smooth rendering
})

export const metadata: Metadata = {
  title: 'ShowBooker | Movie Booking Application',
  description: 'Movie Booking Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <TRPCReactProvider>
        <html lang="en">
          <body className={`${recursive.className}`}>{children}</body>
        </html>
      </TRPCReactProvider>
    </ClerkProvider>
  )
}
