import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">

      <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-30 top-20 left-10"></div>

      <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-20 bottom-20 right-10"></div>

      <div className="max-w-5xl mx-auto text-center z-10">
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Play for
          <span className="text-purple-400"> More </span>
          Than a Score.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-300 text-lg md:text-2xl max-w-3xl mx-auto"
        >
          Track your golf performance, win monthly rewards,
          and support meaningful charities through one
          premium subscription experience.
        </motion.p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">
          <button className="bg-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all glow">
            Start Membership
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition-all">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;