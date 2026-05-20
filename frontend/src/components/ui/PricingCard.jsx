const PricingCard = ({
  title,
  price,
  yearly,
  popular,
  features,
}) => {
  return (
    <div
      className={`
      relative
      rounded-[32px]
      p-10
      border
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-2

      ${
        popular
          ? "bg-gradient-to-br from-purple-600/30 to-cyan-500/20 border-purple-500"
          : "bg-white/5 border-white/10"
      }
      `}
    >
      {popular && (
        <div className="absolute top-5 right-5 bg-purple-500 text-sm px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-3xl font-bold">
        {title}
      </h3>

      <div className="mt-6">
        <span className="text-6xl font-bold">
          ${price}
        </span>

        <span className="text-gray-400">
          /month
        </span>
      </div>

      {yearly && (
        <p className="text-cyan-400 mt-2">
          Save 20% yearly
        </p>
      )}

      <div className="mt-10 space-y-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>

            <p className="text-gray-300">
              {item}
            </p>
          </div>
        ))}
      </div>

      <button
        className="
        mt-10
        w-full
        bg-white
        text-black
        py-4
        rounded-2xl
        font-semibold
        hover:scale-105
        transition-all
        "
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;