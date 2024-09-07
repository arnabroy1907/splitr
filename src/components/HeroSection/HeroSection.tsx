import HeroImage from "@splitr/app/static/images/splitr-hero-image.png";
import Image from "next/image";
import { ButtonLink } from "../Links/ButtonLink";
import { OutlineButtonLink } from "../Links/OutlineButtonLink";
import styles from "./herosection.module.css";

export const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_body}>
        <h1 className={styles.title}>Effortless Expense Sharing with Splitr</h1>
        <p className={styles.description}>
          Splitr makes it easy to manage shared expenses with friends, family,
          or colleagues. Split bills, track payments, and stay on top of your
          finances.
        </p>
        <div className={styles.buttons_wrapper}>
          <ButtonLink href="/">Get Started</ButtonLink>
          <OutlineButtonLink href="/">Learn More</OutlineButtonLink>
        </div>
      </div>
      <div className={styles.hero_image_fade} />
      <Image
        className={styles.hero_image}
        src={HeroImage}
        alt="hero image"
        fill={true}
        priority={true}
      />
    </section>
  );
};
