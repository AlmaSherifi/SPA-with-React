import { Inter } from "next/font/google";
import styles from './layout.module.css';
import "./globals.css";
import Navigation from "@/Components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoShare",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <main className={styles.main}>

        <Navigation/>

          {children} {/* innehållet från sidan */}
        </main>
        
        
        
        </body>
    </html>
  );
}