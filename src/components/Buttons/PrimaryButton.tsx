'use client';

import React, { PropsWithChildren } from "react";
import styles from "./buttons.module.css";
import { ButtonProps } from "./types";

export const PrimaryButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  type = "button",
  children,
}) => {
  return (
    <button type={type} className={styles.primary_button} onClick={onClick}>
      {children}
    </button>
  );
};
