import ChakraLayout from "./components/ChakraLayout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">  
      <body>
        <Providers>
        <Navbar/>
          <ChakraLayout>
            {children}
          </ChakraLayout>
          <Footer/>
         </Providers>
      </body>
    </html>
  )
};