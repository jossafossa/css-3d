import type { CSSProperties } from "react";
import styles from "./Shape.module.scss";

const DEFAULT_SIDES = 4;

export type ShapeProps = {
  sides?: number;
  depth?: number;
  width?: number;
  height?: number;
  topWidth?: number;
  topDepth?: number;
  x?: number;
  y?: number;
  z?: number;
  color?: string;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
};

const useStyles = ({
  depth,
  width,
  height,
  topWidth,
  topDepth,
  x,
  y,
  z,
  color,
  rotateX,
  rotateY,
  rotateZ,
}: ShapeProps) => {
  const style = {
    "--depth": depth,
    "--width": width,
    "--height": height,
    "--top-width": topWidth,
    "--top-depth": topDepth,
    "--x": x,
    "--y": y,
    "--z": z,
    "--color": color,
    "--r-x": rotateX ? `${rotateX}deg` : undefined,
    "--r-y": rotateY ? `${rotateY}deg` : undefined,
    "--r-z": rotateZ ? `${rotateZ}deg` : undefined,
  } as CSSProperties;

  // fiolter out undefined values
  return Object.fromEntries(
    Object.entries(style).filter(([_, v]) => v !== undefined),
  ) as CSSProperties;
};

export const Shape = ({ sides = DEFAULT_SIDES, ...props }: ShapeProps) => {
  if (sides % 2 !== 0) {
    throw new Error("Number of sides must be even");
  }

  const style = useStyles(props);

  const actualSides = sides / 2;

  return (
    <div className={styles.shape} style={style}>
      {[...Array(actualSides)].map((_, i) => (
        <div key={i} />
      ))}
    </div>
  );
};
