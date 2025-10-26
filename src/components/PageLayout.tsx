import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-black overflow-hidden w-full min-h-screen relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
