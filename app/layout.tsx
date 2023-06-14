import { Footer, Navbard } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Card Fox",
  description: "Discover the card in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative ">
        <Navbard />
        {children}
        <Footer />
      </body>
    </html>
  );
}
