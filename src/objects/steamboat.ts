import type { ShapeNode } from "../components";

export const STEAMBOAT = [
  {
    type: "group",
    props: { width: 180, height: 120, depth: 80 },
    children: [
      // Main hull - bottom section (boat-shaped with rounded bottom)
      {
        type: "group",
        props: { width: 160, height: 25, depth: 60 },
        children: [
          {
            type: "shape",
            props: {
              color: "#8B4513",
              sides: 12,
              width: 60,
              height: 25,
              depth: 40,
              z: 0,
              topWidth: 100,
              topDepth: 100,
            },
          },
        ],
      },

      // Hull - middle section
      {
        type: "group",
        props: { width: 140, height: 22, depth: 50 },
        children: [
          {
            type: "shape",
            props: {
              color: "#A0522D",
              sides: 10,
              width: 110,
              height: 22,
              depth: 50,
              z: 20,
              topWidth: 120,
              topDepth: 120,
            },
          },
        ],
      },

      // Hull top section - connection to deck
      {
        type: "shape",
        props: {
          color: "#8B4513",
          sides: 8,
          width: 130,
          height: 6,
          depth: 45,
          z: 36,
          topWidth: 125,
          topDepth: 125,
        },
      },

      // Main deck
      {
        type: "shape",
        props: {
          color: "#DEB887",
          sides: 8,
          width: 125,
          height: 10,
          depth: 42,
          z: 40,
          topWidth: 120,
          topDepth: 120,
        },
      },

      // Main cabin/wheelhouse
      {
        type: "shape",
        props: {
          color: "#F5DEB3",
          sides: 8,
          width: 80,
          height: 30,
          depth: 32,
          z: 48,
          topWidth: 75,
          topDepth: 75,
        },
      },

      // Wheelhouse roof
      {
        type: "shape",
        props: {
          color: "#CD853F",
          sides: 8,
          width: 80,
          height: 5,
          depth: 37,
          z: 78,
          topWidth: 75,
          topDepth: 75,
        },
      },

      // Main smokestack
      {
        type: "shape",
        props: {
          color: "#2F4F4F",
          sides: 12,
          width: 12,
          height: 35,
          depth: 12,
          x: -20,
          z: 48,
          topWidth: 10,
          topDepth: 10,
        },
      },

      // Smokestack base
      {
        type: "shape",
        props: {
          color: "#1C1C1C",
          sides: 8,
          width: 15,
          height: 4,
          depth: 15,
          x: -20,
          z: 44,
          topWidth: 12,
          topDepth: 12,
        },
      },

      // Smokestack top
      {
        type: "shape",
        props: {
          color: "#1C1C1C",
          sides: 12,
          width: 14,
          height: 6,
          depth: 14,
          x: -20,
          z: 83,
          topWidth: 16,
          topDepth: 16,
        },
      },

      // Second smokestack
      {
        type: "shape",
        props: {
          color: "#2F4F4F",
          sides: 12,
          width: 10,
          height: 30,
          depth: 10,
          x: 20,
          z: 48,
          topWidth: 8,
          topDepth: 8,
        },
      },

      // Second smokestack top
      {
        type: "shape",
        props: {
          color: "#1C1C1C",
          sides: 12,
          width: 12,
          height: 5,
          depth: 12,
          x: 20,
          z: 78,
          topWidth: 14,
          topDepth: 14,
        },
      },

      // Front cabin
      {
        type: "shape",
        props: {
          color: "#F5DEB3",
          sides: 6,
          width: 30,
          height: 20,
          depth: 22,
          x: 45,
          z: 48,
          topWidth: 25,
          topDepth: 25,
        },
      },

      // Captain's bridge (upper deck)
      {
        type: "shape",
        props: {
          color: "#DEB887",
          sides: 8,
          width: 55,
          height: 8,
          depth: 28,
          z: 83,
          topWidth: 50,
          topDepth: 50,
        },
      },

      // Bridge cabin
      {
        type: "shape",
        props: {
          color: "#F5DEB3",
          sides: 6,
          width: 45,
          height: 15,
          depth: 22,
          z: 91,
          topWidth: 40,
          topDepth: 40,
        },
      },

      // Paddle wheel housing - left side
      {
        type: "group",
        props: { width: 20, height: 25, depth: 8 },
        children: [
          {
            type: "shape",
            props: {
              color: "#8B0000",
              sides: 6,
              width: 100,
              height: 100,
              depth: 100,
              x: -70,
              y: -22,
              z: 25,
              rotateZ: 90,
              topWidth: 80,
              topDepth: 80,
            },
          },
        ],
      },

      // Paddle wheel housing - right side
      {
        type: "group",
        props: { width: 20, height: 25, depth: 8 },
        children: [
          {
            type: "shape",
            props: {
              color: "#8B0000",
              sides: 6,
              width: 100,
              height: 100,
              depth: 100,
              x: -70,
              y: 22,
              z: 25,
              rotateZ: 90,
              topWidth: 80,
              topDepth: 80,
            },
          },
        ],
      },

      // Paddle wheel center
      {
        type: "shape",
        props: {
          color: "#654321",
          sides: 8,
          width: 22,
          height: 10,
          depth: 22,
          x: -70,
          z: 30,
          rotateX: 90,
          topWidth: 20,
          topDepth: 20,
        },
      },

      // Ship's bell
      {
        type: "shape",
        props: {
          color: "#B8860B",
          sides: 8,
          width: 3,
          height: 4,
          depth: 3,
          x: 10,
          y: -6,
          z: 104,
          topWidth: 4,
          topDepth: 4,
        },
      },

      // Mast
      {
        type: "shape",
        props: {
          color: "#8B4513",
          sides: 8,
          width: 2,
          height: 20,
          depth: 2,
          x: 50,
          z: 66,
          topWidth: 1,
          topDepth: 1,
        },
      },

      // Flag
      {
        type: "group",
        props: { width: 10, height: 1, depth: 6 },
        children: [
          {
            type: "shape",
            props: {
              color: "#FF0000",
              sides: 4,
              width: 100,
              height: 100,
              depth: 100,
              x: 50,
              z: 86,
              topWidth: 75,
              topDepth: 75,
            },
          },
        ],
      },

      // Bow decoration
      {
        type: "shape",
        props: {
          color: "#DAA520",
          sides: 6,
          width: 4,
          height: 8,
          depth: 3,
          x: 75,
          z: 38,
          rotateY: 45,
          topWidth: 2,
          topDepth: 2,
        },
      },

      // Windows - main cabin
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: -15,
          y: -15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: -5,
          y: -15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: 5,
          y: -15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: 15,
          y: -15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: -15,
          y: 15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: -5,
          y: 15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: 5,
          y: 15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },
      {
        type: "shape",
        props: {
          color: "#87CEEB",
          sides: 4,
          width: 6,
          height: 1,
          depth: 6,
          x: 15,
          y: 15,
          z: 60,
          topWidth: 6,
          topDepth: 6,
        },
      },

      // Smoke from chimneys
      {
        type: "shape",
        props: {
          color: "#D3D3D3",
          sides: 6,
          width: 15,
          height: 10,
          depth: 15,
          x: -20,
          z: 87,
          rotateY: 15,
          topWidth: 20,
          topDepth: 20,
        },
      },
      {
        type: "shape",
        props: {
          color: "#E5E5E5",
          sides: 8,
          width: 12,
          height: 8,
          depth: 12,
          x: 20,
          z: 81,
          rotateY: -20,
          topWidth: 16,
          topDepth: 16,
        },
      },
    ],
  },
] satisfies ShapeNode[];
