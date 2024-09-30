import "./globals.css";
import { Footer, Navbar } from "./components";

import {IBM_Plex_Mono} from 'next/font/google'

const imbmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
  display: 'swap',
})

export const metadata = {
  title: "LynnWave",
  description: "Sito web LynnWave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={imbmPlexMono.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
