/** addEventListener메서드는 사용법이 번거로움 더 간결한 onclick이벤트 속성으로 */
const rootDiv = document.getElementById('root')
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles)
  }
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    // prettier-ignore
    console.log('mouse click also occurs on rootDiv', isTrusted,target,bubbles)
  }
}

export default function Onclick() {
  return <div>OnClick</div>
}
