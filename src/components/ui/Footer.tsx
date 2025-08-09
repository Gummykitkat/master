"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white py-6">
            <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                {/* Left side - Logo & copyright */}
                <p className="mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} NextLogic AI. All rights reserved.
                </p>

                {/* Right side - Links */}
                <div className="flex space-x-6">
                    <Link href="/privacy" className="hover:text-gray-900">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="hover:text-gray-900">
                        Terms of Service
                    </Link>
                    <Link href="/contact" className="hover:text-gray-900">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}
