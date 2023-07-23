import './globals.css'

export const metadata = {
  title: 'The Banan Project',
  description: 'This is the official website for the banan project',
  author: 'Yash Rachamalla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0 min-h-screen flex flex-col">{children}</body>
    </html>
  )
}
