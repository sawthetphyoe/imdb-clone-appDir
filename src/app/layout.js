import Header from "@/components/Header";
import Nav from "@/components/Nav";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Nav />
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
