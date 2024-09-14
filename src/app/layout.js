import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "LynnWave",
  description: "Sito web LynnWave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
