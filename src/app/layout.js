import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/shared/Navbar";
import Footer from "@/Components/shared/Footer";
import { ToastContainer } from 'react-toastify';
const outfitFont = Outfit({
  subsets: ["latin"]
});


export const metadata = {
  title: {
    default: "Pixgen",
    template: "%s | Pixgen",
  },
  description: "Pixgen AI image gallery",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <main className="container mx-auto">
        {children}
        </main>
         <ToastContainer />
        <Footer/>
        </body>
    </html>
  );
}
