import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata = {
  title: "Genius health clinic",
  description: "Genius health clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        {children}
      </body>
    </html>
  );
}
