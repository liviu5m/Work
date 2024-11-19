"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { useAppContext } from "@/lib/AppContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-5 fixed flex items-center justify-center w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="max-lg:hidden">
          <ul className="flex items-center justify-center gap-10 font-bold">
            <li>
              <a
                href="/"
                className="hover:text-[#020DFF] p-1 relative decoration-0 inline-block"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className="hover:text-[#020DFF] p-1 relative decoration-0 inline-block"
              >
                BROWSE JOB
              </a>
            </li>
            <li>
              <a
                href="/requests"
                className="hover:text-[#020DFF] p-1 relative decoration-0 inline-block"
              >
                REQUESTS
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#020DFF] p-1 relative decoration-0 inline-block"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-10">
          <a
            href="/create-job"
            className="px-7 w-40 text-center py-4 rounded-lg bg-[#27CB8B] text-white font-bold hover:shadow-xl shadow-lg hover:scale-105"
          >
            POST A JOB
          </a>
          <a
            href={user ? "/account" : "/login"}
            className="px-7 py-4 w-40 text-center rounded-lg bg-[#020DFF] text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl"
          >
            {user ? user.name : "LOG IN"}
          </a>
        </div>
      </div>
    </header>
  );
}
