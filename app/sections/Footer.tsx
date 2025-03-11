'use client';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

export const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-900 dark:text-white text-black py-8 md:py-12">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Contact</h3>
            <p className="text-sm sm:text-base">+89898998</p>
            <p className="text-sm sm:text-base">john@doe.com</p>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Useful Links</h3>
            <ul className="text-sm sm:text-base">
              <li><a href="#features" className="hover:text-sky-400">Features</a></li>
              <li><a href="#services" className="hover:text-sky-400">Services</a></li>
              <li><a href="#pricing" className="hover:text-sky-400">Pricing</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">Follow Us</h3>
            <ul className="flex space-x-6 justify-center sm:justify-start">
              <li><a href="https://github.com/yourusername" className="hover:text-sky-400" aria-label="GitHub"><AiFillGithub size={30} /></a></li>
              <li><a href="https://twitter.com/yourusername" className="hover:text-sky-400" aria-label="Twitter"><AiOutlineTwitter size={30} /></a></li>
              <li><a href="https://facebook.com/yourusername" className="hover:text-sky-400" aria-label="Facebook"><AiFillFacebook size={30} /></a></li>
              <li><a href="https://instagram.com/yourusername" className="hover:text-sky-400" aria-label="Instagram"><AiFillInstagram size={30} /></a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-12 border-t border-gray-600 pt-6">
          <p className="text-sm sm:text-base">
            © 2025. All rights reserved. <a href="https://ceala.co.uk/" className="text-sky-400">Ceala Digital Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
