import { FeatureCard } from "@splitr/components/FeatureCard/FeatureCard";
import { HeroSection } from "@splitr/components/HeroSection/HeroSection";
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
            icon={
              <svg
                data-id="1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--theme-primary-bg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 3h5v5"></path>
                <path d="M8 3H3v5"></path>
                <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path>
                <path d="m15 9 6-6"></path>
              </svg>
            }
          />
          <FeatureCard
            title="Track Payments"
            description="Keep track of who owes what and who has paid their share."
            icon={
              <svg
                data-id="32"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--theme-primary-bg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 17 17 2"></path>
                <path d="m2 14 8 8"></path>
                <path d="m5 11 8 8"></path>
                <path d="m8 8 8 8"></path>
                <path d="m11 5 8 8"></path>
                <path d="m14 2 8 8"></path>
                <path d="M7 22 22 7"></path>
              </svg>
            }
          />
          <FeatureCard
            title="Manage Finances"
            description="Stay on top of your shared expenses and maintain financial transparency."
            icon={
              <svg
                data-id="36"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--theme-primary-bg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            }
          />

          <FeatureCard
            title="Invite Members"
            description="Easily add friends, family, or colleagues to your Splitr group."
            icon={
              <svg
                data-id="45"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--theme-primary-bg)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <circle cx="12" cy="10" r="2"></circle>
                <line x1="8" x2="8" y1="2" y2="4"></line>
                <line x1="16" x2="16" y1="2" y2="4"></line>
              </svg>
            }
          />
        </div>
      </section>
    </main>
  );
};
