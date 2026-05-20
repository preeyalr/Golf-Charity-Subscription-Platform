const AuthButton = ({ text }) => {
  return (
    <button
      className="
      w-full
      bg-purple-600
      hover:bg-purple-700
      py-4
      rounded-2xl
      font-semibold
      transition-all
      duration-300
      hover:scale-[1.02]
      "
    >
      {text}
    </button>
  );
};

export default AuthButton;