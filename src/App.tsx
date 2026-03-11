import { Board, Nodes, Scene } from "./components";
import { MUSHROOM, TREE, STEAMBOAT } from "./objects";

function App() {
  return (
    <Scene>
      <Board>
        <Nodes nodes={MUSHROOM} />
        <Nodes nodes={TREE} />
        <Nodes nodes={STEAMBOAT} />
      </Board>
    </Scene>
  );
}

export default App;
