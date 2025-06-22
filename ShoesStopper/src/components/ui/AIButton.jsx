// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// const AIButton = ({ closeMobileMenu }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       whileHover={{
//         scale: 1.05,
//         boxShadow: "0 0 20px #00FFFF",
//         background: "linear-gradient(90deg, #00ffff 0%, #8a2be2 100%)"
//       }}
//       transition={{ type: "spring", stiffness: 300 }}
//       className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500"
//     >
//       <NavLink
//         to="/ai-stylist"
//         onClick={closeMobileMenu}
//         className="block rounded-full px-5 py-2 text-white font-semibold text-sm bg-black backdrop-blur-md hover:bg-opacity-90 transition-all duration-300"
//       >
//         🤖 AI Stylist
//       </NavLink>
//     </motion.div>
//   );
// };

// export default AIButton;

// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// const AIButton = ({ closeMobileMenu }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//         boxShadow: "0 0 25px #00FFFF",
//         background: "linear-gradient(90deg, #00ffff 0%, #8a2be2 100%)"
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         duration: 0.6
//       }}
//       className="rounded-full p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500"
//     >
//       <NavLink
//         to="/ai-stylist"
//         onClick={closeMobileMenu}
//         className="block rounded-full px-5 py-2 text-white font-semibold text-sm bg-black backdrop-blur-md transition-all duration-300"
//       >
//         🤖 AI Stylist
//       </NavLink>
//     </motion.div>
//   );
// };

// export default AIButton;


import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Animations
const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(15, 240, 252, 0.5); }
  50% { box-shadow: 0 0 20px rgba(15, 240, 252, 0.8); }
  100% { box-shadow: 0 0 5px rgba(15, 240, 252, 0.5); }
`;

const scan = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  perspective: 1000px;
`;

const AIButton = styled.button`
  position: relative;
  width: 100%;
  padding: 10px 20px;
  background: linear-gradient(135deg, #121230 0%, #0a0a1a 100%);
  border: 2px solid rgba(15, 240, 252, 0.3);
  border-radius: 50px;
  color: #0ff0fc;
  font-family: 'Orbitron', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
  text-align: center;
  animation: ${glow} 3s infinite;
  
  &:hover {
    animation: ${glow} 1s infinite, ${float} 3s ease-in-out infinite;
    color: white;
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(15, 240, 252, 0.4),
      transparent
    );
    transition: 0.5s;
    z-index: -1;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 15px 25px;
    font-size: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 20px;
    font-size: 14px;
  }
`;

const CircuitLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, transparent 95%, rgba(150, 0, 255, 0.1) 95%),
    linear-gradient(0deg, transparent 95%, rgba(150, 0, 255, 0.1) 95%);
  background-size: 20px 20px;
  border-radius: 50px;
  pointer-events: none;
  z-index: -1;
`;

const Scanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #0ff0fc, transparent);
  animation: ${scan} 3s linear infinite;
  opacity: ${props => props.isHovered ? 0.8 : 0.4};
  transition: opacity 0.3s ease;
`;

const Particle = styled.div`
  position: absolute;
  background-color: #0ff0fc;
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
`;

const AIButtonComponent = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!isHovered) return;

    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 0.5,
      duration: 1000 + Math.random() * 1000,
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isHovered]);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    
    // Create ripple effect
    const button = e.currentTarget;
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.backgroundColor = 'rgba(15, 240, 252, 0.7)';
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.zIndex = '-1';
    
    button.appendChild(ripple);
    
    const animation = ripple.animate([
      { width: '10px', height: '10px', opacity: 1 },
      { width: '300px', height: '300px', opacity: 0 }
    ], {
      duration: 1000,
      easing: 'ease-out'
    });
    
    animation.onfinish = () => {
      ripple.remove();
    };
  };

  return (
    <ButtonContainer>
      <AIButton
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CircuitLines />
        <Scanner isHovered={isHovered} />
        {children || 'AI Stylist'}
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `particle-move ${particle.duration}ms cubic-bezier(0.1, 0.8, 0.2, 1) ${particle.delay}ms forwards`,
              opacity: 0,
            }}
          />
        ))}
      </AIButton>
    </ButtonContainer>
  );
};

// Global styles for particles (add to your global CSS)
// @keyframes particle-move {
//   0% { opacity: 0; transform: translate(0, 0); }
//   50% { opacity: 0.7; transform: translate(var(--tx), var(--ty)); }
//   100% { opacity: 0; transform: translate(var(--tx2), var(--ty2)); }
// }

export default AIButtonComponent;