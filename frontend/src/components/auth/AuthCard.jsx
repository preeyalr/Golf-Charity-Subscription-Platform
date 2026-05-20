const AuthCard = ({ children }) => {
  return (
    <div
      className="
      w-full
      max-w-md
      bg-white/5
      border
      border-white/10
      backdrop-blur-xl
      rounded-[32px]
      p-10
      relative
      z-10
      "
    >
      {children}
    </div>
  );
};

export default AuthCard;