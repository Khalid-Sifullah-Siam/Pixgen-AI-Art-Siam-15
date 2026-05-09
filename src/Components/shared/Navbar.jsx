"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/all-photos", label: "All Photos" }, 
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        {/* md পর্যন্ত user avatar center এ */}
        {user && (
          <div className="flex md:flex lg:hidden justify-center flex-1">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>{user?.name}</Avatar.Fallback>
            </Avatar>
          </div>
        )}

        {/* lg থেকে navItems */}
        <ul className="hidden lg:flex items-center gap-5 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth */}
        <div className="hidden lg:flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-6">
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>JD</Avatar.Fallback>
              </Avatar>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <ul className="flex items-center text-sm gap-4">
              <li><Link href="/signin" className="nav-link">Sign In</Link></li>
              <li><Link href="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-700 font-bold text-xl"
          >
            {open ? <ImCross /> : <CiMenuFries />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg 
                    transition-all duration-700 ease-in-out transform 
                    ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-red-500 transition">
            <ImCross />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="nav-link">{item.label}</Link>
            </li>
          ))}

          {user ? (
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Sign Out
              </button>
          ) : (
            <>
              <li><Link href="/signin" className="nav-link">Sign In</Link></li>
              <li><Link href="/signup" className="nav-link">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
