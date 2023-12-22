export default function VariousInputs() {
  return (
    <div>
      <p>VariousInputs</p>
      <div>
        <input type="text" placeholder="뭐라고 해봐" />
        <input type="password" placeholder="비밀번호 쳐봐" />
        <input type="email" placeholder="email" />
        <input type="range" />
        <input type="button" value="난 버튼이다" />
        <input type="checkbox" value="난 체크박스다" defaultChecked />
        <input type="radio" value="난 라디오" defaultChecked />
        <input type="file" />
      </div>
    </div>
  )
}
