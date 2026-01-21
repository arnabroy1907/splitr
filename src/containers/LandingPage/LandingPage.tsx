import { FeatureCard } from "@splitr/components/FeatureCard/FeatureCard";
import { HeroSection } from "@splitr/components/HeroSection/HeroSection";
import {
  FinanceIcon,
  MemberIcon,
  PaymentIcon,
  SplitIcon,
} from "@splitr/components/Icons";
import styles from "./landingpage.module.css";

export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <section className={styles.features_section}>
        <div className={styles.features_header}>
          <h2 className={styles.title}>Streamline Your Shared Expenses</h2>
          <p className={styles.description}>
            {`Splitr offers a suite of tools to help you manage your shared
            expenses with ease. From splitting bills to tracking payments, we've
            got you covered.`}
          </p>
        </div>
        <div className={styles.features_items_wrapper}>
          <FeatureCard
            title="Split Expenses"
            description="Easily split bills and expenses with your friends, family, or colleagues."
            icon={<SplitIcon />}
          />
          <FeatureCard
            title="Track Payments"
            description="Keep track of who owes what and who has paid their share."
            icon={<PaymentIcon />}
          />
          <FeatureCard
            title="Manage Finances"
            description="Stay on top of your shared expenses and maintain financial transparency."
            icon={<FinanceIcon />}
          />
          <FeatureCard
            title="Invite Members"
            description="Easily add friends, family, or colleagues to your Splitr group."
            icon={<MemberIcon />}
          />
        </div>
      </section>
    </main>
  );
};
