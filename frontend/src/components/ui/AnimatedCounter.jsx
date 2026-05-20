import CountUp from "react-countup";

const AnimatedCounter = ({ number, label }) => {
  return (
    <div className="text-center">
      <h3 className="text-5xl font-bold text-purple-400">
        <CountUp end={number} duration={3} />+
      </h3>

      <p className="text-gray-400 mt-3">
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;