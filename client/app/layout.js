import "./globals.css";
import Navbar from "./components/Navbar.js";

export const metadata = {
  title: "Your store",
  description: "Example Webpage of a clothing store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="text-center bg-amber-200 border-b-1 border-amber-400"> 🌐 Your Website Here </header>
        <Navbar />
        {children} 
        <footer className="border-t-1 border-amber-400 bg-amber-200 text-right italic font-bold">© Hector Ramirez 2025</footer>
      </body>
    </html>
  );
}