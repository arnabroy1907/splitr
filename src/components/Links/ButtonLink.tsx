import NextLink, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import styles from "./links.module.css";

export const ButtonLink: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => {
  return (
    <NextLink {...props} className={styles.primary_button_link}>
      {children}
    </NextLink>
  );
};
