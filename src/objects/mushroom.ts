import type { ShapeNode } from "../components";

export const MUSHROOM = [
  {
    type: "group",
    props: { width: 100, height: 100, depth: 100 },
    children: [
      {
        type: "shape",
        props: {
          color: "#ff0000",
          sides: 8,
          height: 30,
          width: 80,
          depth: 80,
          z: 60,
          topDepth: 30,
          topWidth: 30,
        },
      },
      {
        type: "shape",
        props: {
          color: "#ff0000",
          sides: 8,
          height: 10,
          width: 30,
          depth: 30,
          z: 90,
          topDepth: 0,
          topWidth: 0,
        },
      },
      {
        type: "shape",
        props: {
          color: "#ff0000",
          sides: 8,
          height: 20,
          width: 100,
          depth: 100,
          z: 60,
          topDepth: 0,
          topWidth: 0,
        },
      },
      {
        type: "shape",
        props: {
          color: "#ffffff",
          sides: 6,
          height: 30,
          z: 20,
          width: 20,
          depth: 20,
        },
      },
      {
        type: "shape",
        props: {
          color: "#ffffff",
          sides: 6,
          height: 20,
          width: 30,
          depth: 30,
          topDepth: 20,
          topWidth: 20,
        },
      },
    ],
  },
] satisfies ShapeNode[];
