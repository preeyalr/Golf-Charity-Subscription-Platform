const GlowButton = ({ text }) => {
  return (
    <button
      className="
      bg-purple-600
      hover:bg-purple-700
      px-8
      py-4
      rounded-full
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      shadow-[0_0_40px_rgba(124,58,237,0.5)]
      "
    >
      {text}
    </button>
  );
};

export default GlowButton;