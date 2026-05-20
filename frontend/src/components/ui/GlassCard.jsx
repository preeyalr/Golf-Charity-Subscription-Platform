const GlassCard = ({ children }) => {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      hover:border-purple-500/40
      transition-all
      duration-300
      "
    >
      {children}
    </div>
  );
};

export default GlassCard;