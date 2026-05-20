const AuthLayout = ({ children }) => {
  return (
    <div
      className="
      min-h-screen
      bg-[#0F172A]
      flex
      items-center
      justify-center
      px-6
      relative
      overflow-hidden
      "
    >

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600/20 blur-[150px] top-0 left-0 rounded-full"></div>

      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] bottom-0 right-0 rounded-full"></div>

      {children}
    </div>
  );
};

export default AuthLayout;