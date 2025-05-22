import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">Phone</h3>
            <p className="text-sm">+39 346 3591443</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Address</h3>
            <p className="text-sm">via Fratelli Rosselli 41,<br />Lastra a Signa, Florence.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Email</h3>
            <p className="text-sm">info@mirkoromanelli.com</p>
          </div>
          
          {/* <div>
            <h3 className="font-bold text-lg mb-4">Opening Hours</h3>
            <p className="text-sm">Mon - Fri: 8:00 am – 7:00 pm<br />Saturday: 8:00 am – 5:00 pm</p>
          </div> */}
        </div>

        <div className="mt-20 border-t border-gray-100 pt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-3xl mb-12">
            Do not hesitate to contact me to discuss a possible project or discover more about my work.
          </h2>
          
          <div className="flex flex-wrap gap-6">
            <Link 
              href="https://www.instagram.com/" 
              className="text-sm link-hover"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link 
              href="https://www.linkedin.com/" 
              className="text-sm link-hover"
              target="_blank" 
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://www.behance.net/" 
              className="text-sm link-hover"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Behance
            </Link>
          </div>
          
          <div className="mt-16 pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-400">© 2024 All Rights Reserved</p>
              <p className="text-xs text-gray-400">Made by <span className="font-medium">Shakuro</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 