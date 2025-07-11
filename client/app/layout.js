import "./globals.css";
import Navbar from "./components/Navbar.js";

export const metadata = {
  title: "Your store",
  description: "Example Webpage of a clothing store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="text-center"> 🌐 Your App Here </header>
        <Navbar />
        {children} 
        <footer className="text-right italic font-bold">© Hector Ramirez 2025</footer>
      </body>
    </html>
  );
}