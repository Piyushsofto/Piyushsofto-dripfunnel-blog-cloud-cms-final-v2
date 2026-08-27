import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://dripfunnel.com"),
  title: { default: "DripFunnel — Technology-Driven Marketing", template: "%s — DripFunnel" },
  description: "Technology-Driven Marketing for Indian small and growing businesses — websites, e-commerce, digital marketing, lead generation and automation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DripFunnel — Technology-Driven Marketing",
    description: "Technology-Driven Marketing That Helps Your Business Grow.",
    url: "https://dripfunnel.com",
    siteName: "DripFunnel",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
