import { useState } from "react";
import { Input } from "./components/Input";

export default function App() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div>
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
  );
}
