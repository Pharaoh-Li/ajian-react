import React, { useRef } from "react";

const RefHookDemo = () => {

  const inputRef = useRef()

  return <div>
    <input ref={inputRef} type="text" />
    <br />
    <button onClick={() => {
      inputRef.current.focus()
    }}>点击聚焦</button>
  </div>
}

export default RefHookDemo