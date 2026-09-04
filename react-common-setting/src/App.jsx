import "./reset.css";
import "./global.css";
import { Layout } from "./components/layout";
import { Frame } from "./components/frame";
import { Point } from "./components/point/Point";

function App() {
  return (
    <>
      <Layout hasCreateButton>
        <Frame>
          <Point></Point>
          <Point></Point>
          <Point></Point>
        </Frame>
        <Frame isNarrow={true}></Frame>
      </Layout>
    </>
  );
}

export default App;
