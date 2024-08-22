import { DashboardSidebar } from "@/models/dashboard-sidebar/dashboard-sidebar";
import { Header } from "@/models/header/header";
import { BanIcon, Building2, CastIcon, CheckCheck, CircleGauge, Link, Mail, UserRound } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      link: "/dashboard",
      icon: <CircleGauge size={18} />,
      title: "Dashboard",
    },
    {
      link: "/dashboard/users",
      icon: <UserRound size={18} />,
      title: "Users",
    },
  ];

  return (
    <div className="text-foreground relative flex h-screen flex-col">
      <Header />
      <main className="bg-background hidden h-[80%] shrink-0 grow flex-col overflow-y-auto md:flex">
        <div className="flex h-full bg-deep-white">
          <DashboardSidebar navItems={navItems} />
          <div className="w-full bg-white">{children}</div>
        </div>
      </main>
    </div>
  );
}
