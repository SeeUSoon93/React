import ReactDOM from 'react-dom/client'

// JSX 구문은 React.createElement 함수 호출을 간결하게 할 목적으로 만들어짐(반환값은 가상 DOM객체) -> 변수나 배열에 담을 수 있다!
// 1. 배열에 담아보기
// const children = [
//   <li>
//     <a href="http://www.google.com" target="_black">
//       <p>go to Google</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.facebook.com" target="_black">
//       <p>go to facebook</p>
//     </a>
//   </li>,
//   <li>
//     <a href="http://www.instagram.com" target="_black">
//       <p>go to instagram</p>
//     </a>
//   </li>
// ]

// 더미 데이터 함수로 10개 배열을 만들어 렌더링해보기
import * as D from './data'

const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>
    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width={100} height={100} />
  </div>
))

const rootVirtualDOM = <div>{children}</div>

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)
