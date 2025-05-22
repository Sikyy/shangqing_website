"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // 防止菜单打开时页面滚动
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2,
        ease: "easeInOut",
        duration: 0.4
      } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.7
      }
    },
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Works", href: "/works" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-bold">
          浙江尚卿
        </Link>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm link-hover"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="relative flex flex-col justify-center items-center w-10 h-10 group z-50"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="uppercase text-xs absolute -left-12 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* {isMenuOpen ? "Close" : "Menu"} */}
            </span>
            <span className={`w-6 h-0.5 bg-black transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-opacity duration-300 mt-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-black transform transition-transform duration-300 mt-1.5 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Full screen menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="container-custom h-full flex flex-col pt-36">
              <motion.div 
                className="flex-1 flex flex-col justify-center"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid md:grid-cols-2 gap-y-8">
                  <div className="space-y-8 md:space-y-10">
                    {navLinks.map((link) => (
                      <motion.div key={link.name} variants={itemVariants}>
                        <Link 
                          href={link.href}
                          className="text-4xl md:text-5xl lg:text-6xl font-bold link-hover block"
                          onClick={toggleMenu}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 