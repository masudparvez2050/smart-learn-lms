"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ShoppingCart, Menu, X, Search, Bell, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-orange-500">
              SmartLearn
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/courses"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Courses
          </Link>
          <Link
            href="/categories"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Categories
          </Link>
          <Link
            href="/instructors"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Instructors
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
        </nav>

        <div className="flex-1 flex items-center justify-end">
          <form
            onSubmit={handleSearch}
            className="relative mr-2 flex-1 max-w-sm hidden md:flex"
          >
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-8 rounded-md w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="flex items-center space-x-2">
            <ThemeSwitcher />

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell size={20} />
            </Button>

            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingCart size={20} />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings" className="w-full">
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/auth/login" className="w-full">
                    Login
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/register" className="w-full">
                    Register
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              className="bg-orange-500 hover:bg-orange-600 hidden md:inline-flex"
              asChild
            >
              <Link href="/auth/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4 space-y-4 bg-background">
          <form onSubmit={handleSearch} className="relative mb-4">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="space-y-2">
            <Link
              href="/courses"
              className="block p-2 text-sm font-medium hover:bg-muted rounded-md"
            >
              Courses
            </Link>
            <Link
              href="/categories"
              className="block p-2 text-sm font-medium hover:bg-muted rounded-md"
            >
              Categories
            </Link>
            <Link
              href="/instructors"
              className="block p-2 text-sm font-medium hover:bg-muted rounded-md"
            >
              Instructors
            </Link>
            <Link
              href="/about"
              className="block p-2 text-sm font-medium hover:bg-muted rounded-md"
            >
              About Us
            </Link>
          </div>
          <div className="pt-2 border-t">
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 mb-2"
              asChild
            >
              <Link href="/auth/register">Sign Up</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/auth/login">Log In</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
