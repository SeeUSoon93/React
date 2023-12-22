import EventListner from './pages/EventListner'
import Onclick from './pages/Onclick'
import ReactOnClick from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'
import OnChange from './pages/OnChange'
import FileInput from './pages/FileInput'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'
/**Event타입의 주 속성
 * type - 이벤트 이름으로 대소문자를 구분하지 않음
 * isTrusted - 이벤트가 웹 브라우저에서 발생한것인지(true), 프로그래밍으로 발생한 것인지(false) 판단
 * target - 이벤트가 처음 발생한 HTML 요소
 * currentTarget - 이벤트의 현재 대상, 이벤트 버블링 중 이벤트가 현재 위치한 객체
 * bubbles - 이벤트가 DOM을 타고 버블링될지 여부를 결정
 */
export default function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      {/* <DispatchEvent />
      <ReactOnClick />
      <Onclick />
      <EventListner /> */}
    </div>
  )
}
