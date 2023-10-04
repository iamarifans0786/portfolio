import Navbar from '@/Components/Header/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer/Footer'
import Hero from '@/Components/Header/Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'This is my portfolio application.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Hero/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
