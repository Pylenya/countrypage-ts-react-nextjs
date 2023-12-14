import React from "react";
import logo from "@/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <div className="header__bg">
        <div className="mx-auto h-full">
          <div className="flex items-center justify-center h-full">
            <Link href={"/"}>
              <Image priority src={logo} alt="logo"></Image>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
