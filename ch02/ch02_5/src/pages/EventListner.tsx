document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click occurs.', isTrusted, target, bubbles)
})

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('mouse click also occurs.', isTrusted, target, bubbles)
})

export default function EventListner() {
  return <div>EventListener</div>
}

/**
 * 옵셔널 체이닝 연산자 ?.
 * getElementById 메서드가 null값을 반환할 수 있다. 이때 옵셔널 체이닝 연산자는 addEventListener메서드를 호출하지 않는다
 */
