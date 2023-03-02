import React, { useMemo, useState, memo } from "react";

const Child = memo(({ useInfo }) => {
  console.log(useInfo);
  return <div>Child</div>
})

const MemoDemo = () => {

  const [count, setCount] = useState(0)

  const useInfo = useMemo(() => {
    return {
      name: 'Mike',
      age: 18
    }
  }, [])

  // const useInfo = {
  //   name: 'Mike',
  //   age: 18
  // }

  return <>
    <button onClick={() => {
      setCount(count + 1)
    }}>点击</button>
    <Child useInfo={useInfo} />
  </>
}

export default MemoDemo