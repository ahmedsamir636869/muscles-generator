'use client';

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./Providers";


const inter = Poppins({ subsets: ["latin"] , weight:"700"});


export default function RootLayout({ children }) {
  return (
   

     <html lang="en">
      <body className={inter.className}>
        <Header/>
        <AuthProvider>
        {children}
        </AuthProvider>
        <Footer/>
        </body>
     </html>
   



  );
}
