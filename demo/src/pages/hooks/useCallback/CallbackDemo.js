import React, { useCallback, useState } from "react";

const ButtonFun = ({ handleClick }) => {
  return <div>
    <button onClick={handleClick}>点击+1</button>
    {Math.random()}
  </div>
}

const Button = React.memo(ButtonFun)

// class Button extends React.PureComponent {

//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (this.props.handleClick === nextProps.handleClick) {
//   //     return false
//   //   }
//   //   return true
//   // }

//   render() {
//     return <div>
//       <button onClick={this.props.handleClick}>点击+1</button>
//       {Math.random()}
//     </div>
//   }
// }

const CallbackDemo = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  const handleClick1 = () => {
    setCount1(count1 + 1)
  }

  const handleClick2 = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return <>
    <Button handleClick={handleClick1} />
    <Button handleClick={handleClick2} />
    <Button handleClick={() => {
      setCount3(count3 + 1)
    }} />
  </>
}

export default CallbackDemo