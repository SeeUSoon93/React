import {Component} from 'react'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to google" />
//         <ClassComponent href="http://www.facebook.com" text="go to facebook" />
//       </ul>
//     )
//   }
// }

// export default function App() {
//   return <div>funtion키워드 함수 컴포넌트</div>
// }

// const App = () => {
//   return <h1>함수 컴포넌트</h1>
// }
// export default App

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://www.google.com" text="go to google" />
      <ArrowComponent href="http://www.facebook.com" text="go to facebook" />
    </ul>
  )
}
