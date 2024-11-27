"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function WithAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [input, setInput] = useState("");

  return (
    <>
      <div>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            className={isActive ? "text-red-500" : "text-blue-500 mr-4"}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}

      <h2>WithAuthLayout</h2>
      {children}
    </>
  );
}
