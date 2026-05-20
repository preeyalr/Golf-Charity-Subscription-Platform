const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-5xl font-bold leading-tight">
        {title}
      </h2>

      <p className="mt-6 text-gray-400 text-lg">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;