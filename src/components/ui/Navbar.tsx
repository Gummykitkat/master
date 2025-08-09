"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          NextLogic AI
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>

          {/* CTA Button */}
          <Button asChild>
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
