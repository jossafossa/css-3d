# CSS 3D

A React application for creating 3D scenes using CSS transforms. Build complex 3D shapes and compositions with declarative React components.

## Features

- 🎨 **3D Shapes**: Create polygonal shapes with customizable properties
- 📦 **Grouping**: Organize shapes into groups for complex compositions
- 🎭 **Scene Management**: Built-in 3D scene rendering with CSS transforms
- 🎯 **Component-based**: Modular and reusable 3D components

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd css-3d
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view the application.

## Usage

Create 3D compositions using the provided components:

```tsx
import { Scene, Group, Shape } from './components';

function App() {
  return (
    <Scene>
      <Group width={200} height={200} depth={200}>
        <Shape
          sides={8}
          width={80}
          height={30}
          depth={80}
          color="#ff0000"
          z={60}
        />
      </Group>
    </Scene>
  );
}
```

### Node-based Composition

For complex 3D structures, you can define scenes using a node-based approach:

```tsx
import { Scene, Board, Nodes, type ShapeNode } from './components';

const TREE = [
  {
    type: "group",
    props: { width: 100, height: 100, depth: 100 },
    children: [
      // Tree trunk
      {
        type: "shape",
        props: {
          color: "#8B4513",
          sides: 8,
          width: 20,
          height: 60,
          depth: 20,
          z: 30,
        },
      },
      // Tree crown
      {
        type: "shape",
        props: {
          color: "#228B22",
          sides: 8,
          width: 80,
          height: 40,
          depth: 80,
          z: 70,
          topSize: 20,
        },
      },
    ],
  },
] satisfies ShapeNode[];

function App() {
  return (
    <Scene>
      <Board>
        <Nodes nodes={TREE} />
      </Board>
    </Scene>
  );
}
```

### Shape Properties

- `sides`: Number of sides for the polygon (must be even)
- `width`, `height`, `depth`: Dimensions of the shape
- `topSize`: Size of the top face (for creating cones/pyramids)
- `x`, `y`, `z`: Position coordinates
- `color`: Fill color

## Project Structure

```
src/
├── components/
│   ├── Scene/     # 3D scene container
│   ├── Shape/     # Individual 3D shapes
│   ├── Group/     # Shape grouping
│   ├── Board/     # Scene board component
│   └── Nodes/     # Node management
├── App.tsx
└── main.tsx
```