import Link from "next/link";
import React from "react";
import logo from "@/assets/images/Logo.jpg"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between px-5 py-3 shadow fixed w-100 bg-white">
        
      <Link href={`/`}>
      <Image src={logo} height={40} width={150} /></Link><div>
        <Link href={`/aboutUs`}>About Us</Link>
        {" | "}
        <Link href={`/services`}>Services</Link>
        {" | "}
        <Link href={`/contactUs`}>Contact Us</Link></div>
    </div>
  );
};

export default Navbar;
