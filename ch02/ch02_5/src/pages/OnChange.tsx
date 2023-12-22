import type {ChangeEvent} from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValeue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }

  return (
    <div>
      <p>VariousInputs</p>
      <div>
        <input type="text" placeholder="뭐라고 해봐" onChange={onChangeValue} />
        <input type="password" placeholder="비밀번호 쳐봐" onChange={onChangeValue} />
        <input type="email" placeholder="email" onChange={onChangeValue} />
        <input type="range" onChange={onChangeValue} />
        <input type="button" value="난 버튼이다" onChange={onChangeValue} />
        <input
          type="checkbox"
          value="난 체크박스다"
          defaultChecked
          onChange={onChangeChecked}
        />
        <input type="radio" value="난 라디오" defaultChecked onChange={onChangeChecked} />
        <input type="file" onChange={onChangeFiles} />
      </div>
    </div>
  )
}
