import type { PropsWithChildren } from "react";
import styles from "./Scene.module.scss";

export const Scene = ({ children }: PropsWithChildren) => {
  return <div className={styles.scene}>{children}</div>;
};
