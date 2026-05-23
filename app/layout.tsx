import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CollegeHub",
  description: "College Discovery Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="transition-all duration-300">
        <Navbar />
        <div className="flex flex-col min-h-screen">

  <div className="flex-1">
    {children}
  </div>

  <Footer />

</div>
      </body>
    </html>
  );
}