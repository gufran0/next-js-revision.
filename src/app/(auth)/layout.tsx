"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <>
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
