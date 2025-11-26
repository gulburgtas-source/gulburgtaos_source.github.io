import { motion } from 'framer-motion';

export const OctopusArtist = () => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center -my-4">
      <motion.img
        src="/assets/images/octopus.png"
        alt="Octopus Artist"
        className="w-full h-full object-contain"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};
