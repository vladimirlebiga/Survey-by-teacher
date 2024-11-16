import React from "react";
import Navigation from "../Nav";
import Logo from "../../assets/logo.webp";

export default function Header() {
  return (
    <header>
      <div className="max-w-7xl mx-auto my-0">
        <nav className="flex justify-around items-center">
          <img src={Logo} className="w-14 h-14 " />
          <Navigation />
        </nav>
      </div>
    </header>
  );
}
