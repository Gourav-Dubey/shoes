import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const AIButton = ({ closeMobileMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px #00FFFF",
        background: "linear-gradient(90deg, #00ffff 0%, #8a2be2 100%)"
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500"
    >
      <NavLink
        to="/ai-stylist"
        onClick={closeMobileMenu}
        className="block rounded-full px-5 py-2 text-white font-semibold text-sm bg-black backdrop-blur-md hover:bg-opacity-90 transition-all duration-300"
      >
        🤖 AI Stylist
      </NavLink>
    </motion.div>
  );
};

export default AIButton;

