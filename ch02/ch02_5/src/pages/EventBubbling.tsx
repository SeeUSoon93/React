import type {SyntheticEvent} from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('버블div클릭', isTrusted, target, bubbles, currentTarget)
  }
  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, currentTarget} = e
    console.log('버블button클릭', isTrusted, target, bubbles, currentTarget)
  }
  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>클릭해라</button>
    </div>
  )
}
