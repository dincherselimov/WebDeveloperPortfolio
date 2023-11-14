import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
       <main>{children}</main>
      <Footer />
      
    </div>
  );
}
