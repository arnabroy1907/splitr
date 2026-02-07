"use client";

import { LinkedInIcon } from "../Icons";
import { Link } from "../Links/Link";
import { SplitrLogo } from "../SplitrLogo/SplitrLogo";
import styles from "./footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.logo_wrapper}>
        <SplitrLogo />
      </div>
      <div className={styles.disclaimer}>
        <p>
          This is a personal pet project created to explore and experiment with
          various tech stacks, inspired by apps that address similar use cases.
        </p>
      </div>
      <div className={styles.copyright}>
        <p className={styles.creator}>
          <Link
            href={process.env.NEXT_PUBLIC_LINKED_IN_URL ?? ""}
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <span>Arnab Roy</span>
        </p>
        <p>{`© ${currentYear} Splitr. All rights reserved`}</p>
      </div>
    </footer>
  );
};
