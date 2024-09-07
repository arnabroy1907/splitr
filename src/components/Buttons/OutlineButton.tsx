'use client';

import React, { PropsWithChildren } from "react";
import styles from "./buttons.module.css";
import { ButtonProps } from "./types";

export const OutlineButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  type = "button",
  children,
}) => {
  return (
    <button type={type} className={styles.outline_button} onClick={onClick}>
      {children}
    </button>
  );
};
