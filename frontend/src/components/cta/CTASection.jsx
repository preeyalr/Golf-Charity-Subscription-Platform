const CTASection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-purple-700 to-cyan-600 rounded-[40px] p-16">

        <h2 className="text-5xl font-bold">
          Join the Subscription That Rewards Purpose
        </h2>

        <p className="mt-6 text-xl text-white/80">
          Win rewards, track your game, and support real causes.
        </p>

        <button className="mt-10 bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all">
          Become a Member
        </button>
      </div>
    </section>
  );
};

export default CTASection;