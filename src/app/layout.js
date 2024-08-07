import { Merriweather, Raleway, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import Animation from "@/Components/Shared/Animation";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Realtor",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="mytheme" lang="en">
      <body
        className={`${merriweather.className} ${raleway.className} ${roboto.className}`}
      >
        <Animation/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
