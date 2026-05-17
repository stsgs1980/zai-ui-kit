import './globals.css'

export const metadata = {
  title: '@zai/ui-kit — Catalog',
  description: 'Layout pattern catalog with 54 patterns, 72 tokens, and shadcn-compatible registry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
