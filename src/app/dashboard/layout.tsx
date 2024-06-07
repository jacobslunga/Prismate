import SideBar from "@/components/SideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prismate - Dashboard",
  description: "Make the design system of the future",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
