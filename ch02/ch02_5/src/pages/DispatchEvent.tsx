export default function DispatchEvent() {
  const onCallDispathEvent = () => {
    console.log('onCallDispatchEvent')
    document.getElementById('root')?.dispatchEvent(new Event('click', {bubbles: true}))
  }
  const onCallClick = () => {
    console.log('onCallClick')
    document.getElementById('root')?.click()
  }
  return (
    <div>
      <p>DispatchEvent</p>
      <button onClick={onCallDispathEvent}>call dispatchEvent</button>
      <button onClick={onCallClick}>call click</button>
    </div>
  )
}
