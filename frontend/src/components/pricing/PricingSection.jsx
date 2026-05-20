import SectionTitle from "../ui/SectionTitle";
import PricingCard from "../ui/PricingCard";

const PricingSection = () => {
  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Simple Subscription Plans"
          subtitle="Choose the membership that lets you compete, contribute, and win."
        />

        <div className="grid md:grid-cols-2 gap-8">

          <PricingCard
            title="Monthly"
            price="19"
            features={[
              "Monthly draw access",
              "Score tracking",
              "Charity contributions",
              "Winner eligibility",
            ]}
          />

          <PricingCard
            title="Yearly"
            price="149"
            yearly={true}
            popular={true}
            features={[
              "Everything in Monthly",
              "20% yearly savings",
              "Priority rewards",
              "Exclusive jackpots",
            ]}
          />

        </div>

      </div>

    </section>
  );
};

export default PricingSection;