"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}