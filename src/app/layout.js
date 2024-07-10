import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Kanooniastra",
    template: "%s | Kanooniastra",
  },
  description: "Law for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader
          height={4}
          color="#FF0000"
          showSpinner={false}
          zIndex={9999999}
        />
        <Provider />
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
