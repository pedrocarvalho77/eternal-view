import type { Metadata } from 'next'
import '../globals.css'
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://eternal-view.vercel.app'),
  title: {
    default: 'Pedro Carvalho',
    template: '%s | Pedro Carvalho',
  },
  description: "Pedro Carvalho's personal website and projects.",
  openGraph: {
    title: 'Pedro Carvalho',
    description: "Software engineer. Personal website and projects.",
    siteName: 'Pedro Carvalho',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

// Runs right after the <meta>, before first paint: applies a stored override without a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.querySelector('meta[name="color-scheme"]').content=t}catch(e){}`

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" suppressHydrationWarning />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
          <Navbar/>
          <Layout>
            {children}
          </Layout>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
