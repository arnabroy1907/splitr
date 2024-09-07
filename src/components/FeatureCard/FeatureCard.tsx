import React, { PropsWithChildren } from "react";
import styles from "./featurecard.module.css";
import { FeatureCardProps } from "./types";

export const FeatureCard: React.FC<PropsWithChildren<FeatureCardProps>> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.feature_card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
