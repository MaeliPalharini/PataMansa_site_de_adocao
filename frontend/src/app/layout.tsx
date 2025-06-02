import Footer from "@/common/layouts/Footer";
import Navbar from "@/common/layouts/Navbar";
import "./globals.css";
import {ReactQueryProvider} from "@/services/api/client/reactQuery";
import {Toaster} from "sonner";

export const metadata = {
  title: "petMansa",
};

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <html lang="en">
      <body className="relative">
        <ReactQueryProvider>
          <Navbar />
          <Toaster richColors position="top-right" />
          <main>{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
