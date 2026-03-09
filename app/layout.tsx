import Navbar from "@/component/Navbar";
import "../styles/globals.css";
import Footer from "@/component/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}