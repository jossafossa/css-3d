import type { CSSProperties, PropsWithChildren } from "react";
import styles from "./Group.module.scss";

export type GroupProps = {
  sides?: number;
  depth?: number;
  width?: number;
  height?: number;
  topSize?: number;
  x?: number;
  y?: number;
  z?: number;
};

const useStyles = ({
  depth = 100,
  width = 100,
  height = 100,
  topSize,
  x,
  y,
  z,
}: GroupProps) => {
  const styles = {
    "--depth": depth,
    "--width": width,
    "--height": height,
    "--top-size": topSize,
    "--x": x,
    "--y": y,
    "--z": z,
  } as CSSProperties;

  // fiolter out undefined values
  return Object.fromEntries(
    Object.entries(styles).filter(([_, v]) => v !== undefined),
  ) as CSSProperties;
};

export const Group = ({
  children,
  ...props
}: PropsWithChildren<GroupProps>) => {
  const style = useStyles(props);

  return (
    <div className={styles.group} style={style}>
      {children}
    </div>
  );
};
