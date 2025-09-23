'use client';
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Section */}
          <div>
            <h2 className="text-red-600 text-2xl font-bold mb-6">Contact</h2>
            <div className="space-y-2">
              <p>Email: info@roberon.com</p>
              <p>Tel: +91 9611331055</p>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h2 className="text-red-600 text-2xl font-bold mb-6">Location</h2>
            <div className="space-y-2">
              <p>Sir MV Block,</p>
              <p>Cambridge Institute of Technology,</p>
              <p>Basavanapura Main Road,</p>
              <p>KR Puram, Bangalore 560036.</p>
            </div>
          </div>

          {/* Follow Section */}
          <div>
            <h2 className="text-red-600 text-2xl font-bold mb-6">Follow</h2>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/roberon_technologies?igsh=eGc2aHhtMjVtcG1u" target="_blank" 
                className="text-white hover:text-red-600 transition-colors cursor-target">
                <FaInstagram size={32} />
              </Link>
              {/* <Link href="https://twitter.com" target="_blank"
                className="text-white hover:text-red-600 transition-colors">
                <FaXTwitter size={24} />
              </Link> */}
              <Link href="https://www.linkedin.com/company/roberon/" target="_blank"
                className="text-white hover:text-red-600 transition-colors cursor-target">
                <FaLinkedin size={32} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t flex items-center justify-center border-gray-800">
          <p className="text-md">All rights reserved © 2025 by Roberon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;