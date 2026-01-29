import { motion } from "framer-motion";

const text = "console.log('Loading...');"; // The text you want to type

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <h1 className="text-xl md:text-6xl font-mono font-bold text-white">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              repeat: 0,
              delay: index * 0.08, // Stagger effect
            }}
          >
            {letter}
          </motion.span>
        ))}
        {/* Blinking Cursor */}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 inline-block w-3 h-10 bg-purple-700 align-middle"
        />
      </h1>
    </motion.div>
  );
};

export default Preloader;