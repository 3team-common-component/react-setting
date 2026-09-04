import "./App.css";
import "./reset.css";
import "./global.css";
import { Layout } from "./components/Layout";
import { Frame } from "./components/Frame";
import { Point } from "./components/Point/Point";
import { Button } from "./components/Button/BasicButton";
import { CircleButton } from "./components/Button/CircleButton";
import { RecordButton } from "./components/Button/RecordButton";
import { NavButton } from "./components/Button/NavButton";
import { useState } from "react";
import { Input } from "./components/Input";

export default function App() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <Layout hasCreateButton>
        <Frame>
          <Point></Point>
          <Point></Point>
          <Point></Point>
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
            수정완료
          </Button>

          <Button bgcolor="gray" size="type03">
            취소
          </Button>

          <RecordButton bgcolor="primary" />

          <RecordButton bgcolor="primary" disabled />

          
          
        </Frame>
        <Frame isNarrow={true}>
          <div className="test">
            <Input
              label="닉네임"
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해 주세요"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              error={
                password !== passwordConfirm && passwordConfirm.length > 0
                  ? "비밀번호가 일치하지 않습니다."
                  : ""
              }
            />
          </div>
          <CircleButton bgcolor="primary" />
          <CircleButton icon="pause" bgcolor="green" />
          <CircleButton disabled />
          <CircleButton icon="pause" disabled />
        </Frame>
      </Layout>
    </>
  );
}
