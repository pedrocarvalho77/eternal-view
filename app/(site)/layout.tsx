import '../globals.css'
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: 'Pedro Carvalho',
    template: '%s | Pedro Carvalho',
  },
  description: "Pedro Carvalho's personal website and projects.",
}

// Runs before first paint so the saved/system theme is applied without a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
