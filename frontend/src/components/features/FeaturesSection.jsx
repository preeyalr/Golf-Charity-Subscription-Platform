import { Trophy, HeartHandshake, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <BarChart3 size={40} />,
    title: "Track Performance",
    desc: "Enter your latest golf scores and monitor progress beautifully.",
  },
  {
    icon: <Trophy size={40} />,
    title: "Win Monthly Rewards",
    desc: "Match numbers and compete for exciting monthly jackpots.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Support Charities",
    desc: "Every subscription contributes to causes that matter.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg hover:-translate-y-2 transition-all"
            >
              <div className="text-purple-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;