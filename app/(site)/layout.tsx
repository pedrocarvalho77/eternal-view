import ChakraLayout from "./components/ChakraLayout";
import { Providers } from "../providers";

export default function RootLayout ({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">  
      <body>
        <Providers>
          <ChakraLayout>{children}</ChakraLayout>
         </Providers>
      </body>
    </html>
  )
};