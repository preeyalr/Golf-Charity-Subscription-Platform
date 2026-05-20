const AuthInput = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="
      w-full
      bg-white/10
      border
      border-white/10
      rounded-2xl
      p-4
      text-white
      outline-none
      focus:border-purple-500
      mb-5
      "
    />
  );
};

export default AuthInput;