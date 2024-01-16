import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

// const myFont = localFont({ src: "../statics-fonts/times-new-roman.ttf" });

export const metadata = {
  title: "Fulmar Marine Service",
  description: "Ship Chandler at Chittagong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="body-color">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
