import './globals.css'

export const metadata = {
  title: 'The Banan Project',
  description: 'This is the official website for the banan project',
  author: 'Yash Rachamalla',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
