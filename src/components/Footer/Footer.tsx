import { Link } from "../Links/Link";
import { SplitrLogo } from "../SplitrLogo/SplitrLogo";
import styles from "./footer.module.css";

const LINKED_IN_URL = "https://www.linkedin.com/in/arnab-roy-1907/";

export const Footer = () => {
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
          <Link href={LINKED_IN_URL} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="var(--theme-fg)"
              version="1.1"
              id="linkedin-icon"
              viewBox="0 0 490.732 490.732"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path d="M472.366,0.003H18.36C8.219,0.003,0,8.222,0,18.363v454.005c0,10.143,8.219,18.361,18.36,18.361h454.012    c10.142,0,18.36-8.219,18.36-18.361V18.363C490.727,8.222,482.507,0.003,472.366,0.003z M130.375,403.808    c0,6.762-5.478,12.238-12.24,12.238H69.132c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.484-12.24,12.24-12.24h49.003    c6.762,0,12.24,5.477,12.24,12.24V403.808z M130.375,127.482c0,6.763-5.478,12.24-12.24,12.24H69.132    c-6.756,0-12.24-5.478-12.24-12.24V83.969c0-6.763,5.484-12.24,12.24-12.24h49.003c6.762,0,12.24,5.477,12.24,12.24V127.482z     M433.835,403.808c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.763,0-12.24-5.477-12.24-12.238v-90.436    c0-29.988-1.566-49.383-4.712-58.189c-3.14-8.807-8.237-15.649-15.3-20.526c-7.062-4.884-15.558-7.32-25.496-7.32    c-12.729,0-24.149,3.488-34.26,10.459c-10.11,6.977-17.038,16.211-20.79,27.717c-3.745,11.506-5.618,32.779-5.618,63.807v74.488    c0,6.762-5.483,12.238-12.24,12.238h-49.003c-6.756,0-12.24-5.477-12.24-12.238V189.625c0-6.763,5.483-12.24,12.24-12.24h43.771    c6.763,0,12.24,5.477,12.24,12.24v16.316c0,6.763,3.312,7.852,7.858,2.852c22.864-25.123,50.753-37.687,83.673-37.687    c16.212,0,31.028,2.919,44.455,8.758c13.422,5.838,23.58,13.292,30.466,22.356c6.885,9.063,11.683,19.351,14.382,30.857    c2.699,11.505,4.058,27.98,4.058,49.426V403.808L433.835,403.808z" />
                </g>
              </g>
            </svg>
          </Link>
          <span>Arnab Roy</span>
        </p>
        <p>{`© 2024 Splitr. All rights reserved`}</p>
      </div>
    </footer>
  );
};
