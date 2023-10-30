import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Favicon from "/public/assets/images/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Kaleem",
  description:
    "Full-Stack Developer ( MongoDB,Postgres, Express , React,Next, Node, React Native )",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto max-w-[1440px] min-h-screen flex flex-col justify-between space-y-4">
          <div>
            <Navbar />
            {children}
          </div>
          <Footer />
          <ToastContainer
            closeButton={false}
            icon={false}
            position="top-right"
            autoClose={400}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="dark"
          />
        </main>
      </body>
    </html>
  );
}
