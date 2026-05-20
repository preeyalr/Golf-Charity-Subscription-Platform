const steps = [
  "Submit your latest 5 golf scores",
  "Platform generates draw entries",
  "Match 3, 4, or 5 numbers",
  "Win rewards or rollover jackpots",
];

const RewardsSection = () => {
  return (
    <section className="py-32 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-20">
          Every Score Gives You a Chance to Win
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#111827] border border-white/10 p-8 rounded-3xl"
            >
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mb-6">
                {index + 1}
              </div>

              <p className="text-gray-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;