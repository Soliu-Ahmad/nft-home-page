
import './styles/globals.css'
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ThemeProvider } from "next-themes";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
    
          {children}
          <Footer />
        </div>
        
        </ThemeProvider>
      </body>
    </html>
  );
}
