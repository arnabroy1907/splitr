import NextLink, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import styles from "./links.module.css";

export const OutlineButtonLink: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...props
}) => {
  return (
    <NextLink {...props} className={styles.outline_button_link}>
      {children}
    </NextLink>
  );
};
