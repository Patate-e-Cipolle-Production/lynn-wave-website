import "./globals.css";
import { Footer, Navbar } from "./components";


export const metadata = {
  title: "LynnWave",
  description: "Sito web LynnWave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
