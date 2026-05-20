const CharitySection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Your Membership Creates Real Impact
          </h2>

          <p className="mt-8 text-gray-400 text-lg">
            Every subscription contributes directly to meaningful charities
            chosen by the community.
          </p>

          <div className="mt-10 space-y-4">
            <div className="bg-white/5 p-5 rounded-2xl">
              10% minimum contribution
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              Choose your own charity
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              Featured charity spotlights
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-cyan-500 h-[500px] rounded-[40px]"></div>

      </div>
    </section>
  );
};

export default CharitySection;