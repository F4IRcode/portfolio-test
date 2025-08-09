import './globals.css'
export const metadata = {
  title: 'F4IR — Portfolio',
  description: 'Portfolio de F4IR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white font-mono">
        {children}
      </body>
    </html>
  )
}
