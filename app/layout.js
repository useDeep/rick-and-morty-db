import { Suspense } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import './globals.scss'

export const metadata = {
  title: 'Rick and Morty DB',
  description: 'Browse through the characters of Rick and Morty.',
}

export default function RootLayout({ children}) {

  return (
    <html lang="en">
      <body className='bg-body-tertiary'>
          <Navbar />
          <Suspense fallback={<linearGradientoading />}>
        {children}
        </Suspense>
        <Footer />
        </body>
    </html>
  )
}
