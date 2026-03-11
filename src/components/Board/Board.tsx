import type { PropsWithChildren } from "react";
import styles from "./Board.module.scss";

export const Board = ({ children }: PropsWithChildren) => {
  return <div className={styles.board}>{children}</div>;
};
