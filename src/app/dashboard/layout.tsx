import { DashboardSidebar } from "@/components/layout/DashboardSidebar";
import { Navbar } from "@/components/layout/Navbar";

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen"><Navbar /><div className="mx-auto flex max-w-7xl flex-col md:flex-row"><DashboardSidebar /><main className="min-w-0 flex-1 p-6 md:p-10">{children}</main></div></div>;
}
