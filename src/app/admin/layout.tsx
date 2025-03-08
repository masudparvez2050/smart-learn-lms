"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Users,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Home,
  DollarSign,
  MessageSquare,
  FileText,
  Bell,
  ShieldCheck,
  FileQuestion,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const mainNavItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Users",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Courses",
      href: "/admin/courses",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      title: "Instructors",
      href: "/admin/instructors",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Quizzes",
      href: "/admin/quizzes",
      icon: <FileQuestion className="h-5 w-5" />,
    },
    {
      title: "Sales",
      href: "/admin/sales",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      title: "Reviews",
      href: "/admin/reviews",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Reports",
      href: "/admin/reports",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  const secondaryNavItems = [
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: "Notifications",
      href: "/admin/notifications",
      icon: <Bell className="h-5 w-5" />,
    },
    {
      title: "Security",
      href: "/admin/security",
      icon: <ShieldCheck className="h-5 w-5" />,
    },
    {
      title: "Help",
      href: "/admin/help",
      icon: <HelpCircle className="h-5 w-5" />,
    },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
          {sidebarOpen ? (
            <Link href="/admin" className="flex items-center">
              <span className="text-xl font-bold text-orange-500">
                SmartLearn
              </span>
              <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Admin
              </span>
            </Link>
          ) : (
            <Link href="/admin" className="mx-auto">
              <span className="text-xl font-bold text-orange-500">S</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hidden md:flex"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3">
          <nav className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    isActive
                      ? "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-500"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {sidebarOpen && <span>{item.title}</span>}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3
              className={`px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider ${!sidebarOpen && "text-center"}`}
            >
              {sidebarOpen ? "Settings" : "⚙️"}
            </h3>
            <nav className="mt-2 space-y-1">
              {secondaryNavItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-500"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {sidebarOpen && <span>{item.title}</span>}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/"
            className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <Home className="mr-3 h-5 w-5" />
            {sidebarOpen && <span>Back to Site</span>}
          </Link>
          <Button
            variant="ghost"
            className={`w-full mt-2 justify-start text-red-600 hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300 ${!sidebarOpen && "justify-center"}`}
          >
            <LogOut className="mr-3 h-5 w-5" />
            {sidebarOpen && <span>Log out</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <Menu size={20} />
            </Button>
            <span className="ml-2 text-lg font-semibold">Admin Dashboard</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold">
              {pathname === "/admin"
                ? "Dashboard Overview"
                : (pathname.split("/").pop() || "").charAt(0).toUpperCase() +
                  (pathname.split("/").pop() || "").slice(1)}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Bell size={20} />
            </Button>
            <div className="relative">
              <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
}
