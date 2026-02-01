import './globals.css'
import Navbar from '@/components/Navbar'
import RevealObserver from '@/components/ui/RevealObserver'

export const metadata = {
  title: 'Arush Vishwakarma - Portfolio',
  description: 'My Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <RevealObserver />
        {children}
      </body>
    </html>
  )
}

