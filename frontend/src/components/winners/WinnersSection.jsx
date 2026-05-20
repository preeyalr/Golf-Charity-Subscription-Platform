import { motion } from "framer-motion";
import { Trophy, CircleDollarSign } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";

const winners = [
  {
    name: "James Carter",
    amount: "$12,500",
    charity: "Children Education Fund",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Sophia Lee",
    amount: "$8,200",
    charity: "Cancer Relief Foundation",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Michael Brooks",
    amount: "$15,000",
    charity: "Clean Water Initiative",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
];

const WinnersSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <SectionTitle
          title="Celebrating Real Winners"
          subtitle="Every month, members win rewards while supporting meaningful charities."
        />

        {/* Winner Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {winners.map((winner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >

              <GlassCard>

                <div className="flex items-center gap-4">

                  <img
                    src={winner.image}
                    alt={winner.name}
                    className="
                    w-20
                    h-20
                    rounded-full
                    object-cover
                    border-2
                    border-purple-400
                    "
                  />

                  <div>
                    <h3 className="text-2xl font-bold">
                      {winner.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Supported {winner.charity}
                    </p>
                  </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                  <div>
                    <p className="text-gray-400 text-sm">
                      Reward Won
                    </p>

                    <h2 className="text-4xl font-bold text-purple-400">
                      {winner.amount}
                    </h2>
                  </div>

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-purple-500/20
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Trophy className="text-yellow-400" size={30} />
                  </div>

                </div>

              </GlassCard>

            </motion.div>
          ))}

        </div>

        {/* Live Jackpot Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="
          mt-20
          bg-gradient-to-r
          from-purple-700
          to-cyan-600
          rounded-[32px]
          p-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-8
          "
        >

          <div>
            <p className="text-white/70 uppercase tracking-widest text-sm">
              LIVE JACKPOT
            </p>

            <h2 className="text-5xl font-bold mt-3">
              $120,000
            </h2>

            <p className="mt-4 text-white/80">
              Next monthly draw is approaching fast.
            </p>
          </div>

          <button
            className="
            bg-white
            text-black
            px-8
            py-4
            rounded-full
            font-semibold
            hover:scale-105
            transition-all
            flex
            items-center
            gap-3
            "
          >
            <CircleDollarSign />
            Enter Draw
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default WinnersSection;