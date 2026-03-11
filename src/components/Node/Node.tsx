import { Group } from "../Group";
import type { ShapeNode } from "../Nodes";
import { Shape } from "../Shape";

type NodeProps = { node: ShapeNode };

export const Node = ({ node }: NodeProps) => {
  if (node.type === "shape") {
    return <Shape {...node.props} />;
  }

  if (node.type === "group") {
    return (
      <Group {...node.props}>
        {node.children.map((child, index) => (
          <Node key={index} node={child} />
        ))}
      </Group>
    );
  }

  return null;
};
