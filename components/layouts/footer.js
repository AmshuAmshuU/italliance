// import { Mail, Phone, Whatsapp } from "lucide-react";
import Mail from "@/assets/icons/mail-fill.svg"
import Phone from "@/assets/icons/phone-fill.svg"
import Whatsapp from "@/assets/icons/whatsapp-fill.svg"
import Image from "next/image";
import logo from "@/assets/images/Logo.jpg";
import styles from "@/styles/headerFooter.module.css"

export default function Footer() {
  return (
    <footer className={`${styles.footer_container} py-3 px-5`}>
        <div className={` items-start ${styles.footer_top_container}`}>
          <div className={` ${styles.footer_cols}`}>
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={60}
              className="object-contain"
            />

            <div className={`flex flex-col space-y-2 text-sm`}>
              <div className="flex space-x-3">
                <Image src={Mail} alt="mail" className="w-4 h-4" />
                <a href="mailto:contact@italliance.tech" className="hover:text-blue-600">
                  contact@italliance.tech
                </a>
              </div>

              <div className="flex space-x-3">
                <Image src={Phone} alt="phone" className="w-4 h-4" />
                <a href="tel:9663265984" className="hover:text-blue-600">
                  9663265984
                </a>
              </div>

              <div className="flex space-x-3">
                <Image src={Whatsapp} alt="whatsapp" className="w-4 h-4" />
                <a
                  href="https://wa.me/919663265984"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  +91 96632 65984
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`${styles.footer_cols}`}>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm list-none p-0 m-0">
              <li><a href="#" className="hover:text-blue-600">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className={`${styles.footer_cols}`}>
            <h3 className="text-2xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm list-none p-0 m-0">
              <li><a href="#" className="hover:text-blue-600">Website Development</a></li>
              <li><a href="#" className="hover:text-blue-600">Custom App</a></li>
              <li><a href="#" className="hover:text-blue-600">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-blue-600">SEO Services</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div className={`${styles.footer_cols}`}>
            <h3 className="text-2xl font-semibold mb-4">Cities We Serve</h3>
            <ul className="space-y-3 text-sm list-none p-0 m-0">
              <li>Bengaluru</li>
              <li>Hyderabad</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 text-center text-xs text-gray-600">
          © Your Company 2021. All rights reserved.
        </div>
    </footer>
  );
}