import type {FC, PropsWithChildren} from 'react'

export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />
}
export default P
/** {...props}구문 : props에 담긴 다양한 속성을 타입스크립트의 전개 연산자처럼 한번에 전달 */
