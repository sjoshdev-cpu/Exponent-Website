import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import CustomCursor from "./CustomCursor";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
