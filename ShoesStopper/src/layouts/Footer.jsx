import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">ShoesStopper</h3>
            <p className="text-gray-400">
              Premium quality footwear for every occasion. Step into style and comfort.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
              <FaYoutube className="text-gray-400 hover:text-white cursor-pointer transition-colors" size={20} />
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">Shop</h4>
            <ul className="text-gray-400 space-y-2">
              {['Men', 'Women', 'Kids', 'Collections', 'Sale'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">Help</h4>
            <ul className="text-gray-400 space-y-2">
              {['FAQs', 'Shipping & Returns', 'Store Locator', 'Size Guide', 'Contact Us'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold">About</h4>
            <ul className="text-gray-400 space-y-2">
              {['Our Story', 'Sustainability', 'Careers', 'Press', 'Affiliates'].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ShoesStopper. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6 mt-4 md:mt-0">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item) => (
                <span key={item} className="hover:text-white cursor-pointer transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;    
