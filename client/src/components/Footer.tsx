import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4 z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center flex-col md:flex-row">
            <span className="text-2xl font-bold">Khane<span className='text-orange-500'>Wala.com</span></span>
            <span className="text-sm ml-2 text-gray-400">— trusted restaurant partner —</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h3 className="font-bold underline">ABOUT Khane<span className='text-orange-500'>Wala</span></h3>
            <ul className="mt-2 space-y-1 text-sm text-secondary">
              <li><Link to="#" className="hover:underline">Who We Are</Link></li>
              <li><Link to="#" className="hover:underline">Blog</Link></li>
              <li><Link to="#" className="hover:underline">Work With Us</Link></li>
              <li><Link to="#" className="hover:underline">Investors Relations</Link></li>
              <li><Link to="#" className="hover:underline">Report Fraud</Link></li>
              <li><Link to="#" className="hover:underline">Press Kit</Link></li>
            </ul>
          </div>
    
          <div>
            <h3 className="font-bold underline">FOR RESTAURANTS</h3>
            <ul className="mt-2 space-y-1 text-sm text-secondary">
              <li><a href="#" className="hover:underline">Partner With Us</a></li>
              <li><a href="#" className="hover:underline">Apps For You</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold underline">LEARN MORE</h3>
            <ul className="mt-2 space-y-1 text-sm text-secondary">
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold underline">SOCIAL LINKS</h3>
            <div className="mt-2 flex space-x-4 ">
              <a href="#" className="hover:text-gray-800"><span className="sr-only">Instagram</span>📸</a>
              <a href="#" className="hover:text-gray-800"><span className="sr-only">LinkedIn</span>💼</a>
              <a href="#" className="hover:text-gray-800"><span className="sr-only">Facebook</span>👍</a>
              <a href="#" className="hover:text-gray-800"><span className="sr-only">YouTube</span>🎥</a>
            </div>
      
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-xs text-gray-500">
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. © 2008-2024 © KhaneWala™ Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;