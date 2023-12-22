/* key 속성 - 같은 이름의 컴포넌트가 여러 개일 때 구분하기 위해 사용 */
// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
//   return <div>{texts}</div>
// }

/* children 속성 - <div>처럼 자식 요소를 포함할 수 있는 컴포넌트에만 사용할 수 있음 */
// export default function App() {
//   const texts = ['hello', 'world'].map((text, index) => <p key={index} children={text} />)
//   return <div children={texts} />
// }

/* 컴포넌트 내부에서 children속성 사용*/
import P from './P'

export default function App() {
  const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} />
}
