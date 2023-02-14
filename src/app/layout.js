import Header from "@/components/Header";
import Nav from "@/components/Nav";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import ThemedApp from "./ThemedApp";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemedApp>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Nav />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </ThemedApp>
      </body>
    </html>
  );
}
