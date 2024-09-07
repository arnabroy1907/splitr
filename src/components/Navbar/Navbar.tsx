import Link from "next/link"
import { SplitrLogo } from "../SplitrLogo/SplitrLogo"
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <SplitrLogo />
      <div className={styles.navbar_buttons_wrapper}>
        <Link className={styles.navbar_sign_in_link} href="/">Sign in</Link>
      </div>
    </nav>
  )
}
