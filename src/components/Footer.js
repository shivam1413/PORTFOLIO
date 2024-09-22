import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className="w-full bg-white shadow-md z-70 border-t-2">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md">
          <div className="flex justify-between h-60 items-center">
            <div className="md:text-sm font-medium">
              <span className="text-pink-500 font-semibold">&lt;</span> Shivam <span className="text-pink-500 font-semibold">&gt;</span>
            </div>
            <div className="text-center text-sm py-2">
              <p><b>Contact Me</b></p>
              <br />
              <p>+91 8677974254</p>
              <p>Email: shivamkumar867797@gmail.com</p>
            </div>
            <div className="space-y-2">
              <div className="flex space-x-3 text-2xl">
                <ul className="flex space-x-3 text-xl">
                  <li>
                    <a href="https://www.linkedin.com/in/shivam-kumar-6a7123286/" target="_blank" rel="noreferrer">
                      <FaLinkedin className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/shivam1413" target="_blank" rel="noreferrer">
                      <FaGithub className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shivam_choudhary__14/" target="_blank" rel="noreferrer">
                      <FaInstagram className="hover:scale-105 duration-200 cursor-pointer hover:text-pink-500" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-sm py-2">
            Designed by <span className="text-pink-500 hover:text-pink-300 cursor-pointer">Shivam Kumar</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
