import type { GroupProps } from "../Group";
import { Node } from "../Node";
import type { ShapeProps } from "../Shape";

export type ShapeNode =
  | {
      type: "shape";
      props: ShapeProps;
    }
  | {
      type: "group";
      props: GroupProps;
      children: ShapeNode[];
    };

type NodesProps = {
  nodes: ShapeNode[];
};

export const Nodes = ({ nodes }: NodesProps) => {
  return (
    <>
      {nodes.map((node, index) => (
        <Node key={index} node={node} />
      ))}
    </>
  );
};
