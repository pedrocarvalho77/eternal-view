"use client"

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme/theme'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Box maxW="6xl" mx="auto" px={5} py={10}>
          {children}
        </Box>
      </ChakraProvider>
    </CacheProvider>
  )
}