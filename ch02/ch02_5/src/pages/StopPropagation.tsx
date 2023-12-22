/**stopPropagation메서드 - 가까운 부모에서 먼 부모쪽으로 이벤트가 버블링되면 전달되는 것을 멈춤.(이벤트 캡처링) */
import type {SyntheticEvent} from 'react'

export default function stopPropagation() {
  const onDivClick = (e: SyntheticEvent) => console.log('div클릭')
  const onButtonClick = (e: SyntheticEvent) => {
    console.log('button클릭, stop')
    e.stopPropagation() // 부모(div)로는 이벤트가 전달되지 않음
  }
  return (
    <div onClick={onDivClick}>
      <p>StopPropagation</p>
      <button onClick={onButtonClick}>클릭</button>
    </div>
  )
}
