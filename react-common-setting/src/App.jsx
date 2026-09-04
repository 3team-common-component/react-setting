import "./reset.css";
import "./global.css";
import { Layout } from "./components/layout";
import { Frame } from "./components/frame";
import { Point } from "./components/point/Point";
import { Button } from "./components/Button/BasicButton";
import { CircleButton } from "./components/Button/CircleButton";
import { RecordButton } from "./components/Button/RecordButton";
import { NavButton } from "./components/Button/NavButton";

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
<NavButton size="type01"> 오늘의 습관</NavButton>
      <NavButton size="type02"> 홈</NavButton>

      <Button bgcolor="primary" size="type02">
        오늘의 습관으로 가기
      </Button>
      <Button bgcolor="primary" size="type02">
        오늘의 습관으로 가기
      </Button>
      <Button bgcolor="primary" size="type01">
        만들기
      </Button>
      <Button bgcolor="primary" size="makestudy">
        스터디 만들기
      </Button>

      <Button bgcolor="primary" size="type03">
        확인
      </Button>

      <Button bgcolor="gray" size="type03">
        취소
      </Button>


      <RecordButton bgcolor="primary"/>

      <RecordButton bgcolor="primary" disabled />

      <CircleButton bgcolor="primary" />
      <CircleButton icon="pause" bgcolor="green"/>
      <CircleButton disabled/>
      <CircleButton icon="pause" disabled/>
      </Layout>
    </>
  );
}

export default App;
