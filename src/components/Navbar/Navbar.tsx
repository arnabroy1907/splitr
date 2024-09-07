import { Link } from "../Links/Link";
import { SplitrLogo } from "../SplitrLogo/SplitrLogo";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <SplitrLogo />
      <div className={styles.navbar_links_wrapper}>
        <Link href="/">Sign in</Link>
      </div>
    </nav>
  );
};
