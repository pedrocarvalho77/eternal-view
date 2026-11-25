export const metadata = {
  title: 'Pedro Carvalho Personal Website',
  description: "Sanity Studio for Pedro Carvalho's website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
