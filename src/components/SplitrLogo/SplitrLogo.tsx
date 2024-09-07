import Link from "next/link";
import styles from "./splitrlogo.module.css";

export const SplitrLogo = () => {
  return (
    <Link className={styles.splitr_logo_container} href="/">
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
      <span>Splitr</span>
    </Link>
  );
};
