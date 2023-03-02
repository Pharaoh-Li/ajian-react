import React, { useEffect, useState } from 'react'

class Chat {
  constructor() {
    this.listeners = {}
  }

  subscribe(id, callback) {
    if (!this.listeners[id]) {
      this.listeners[id] = []
    }
    this.listeners[id].push(callback)
  }

  unSubscribe(id, callback) {
    const index = this.listeners[id].indexOf(callback)
    this.listeners[id].splice(index, 1)
  }

  publish(data) {
    for (const key in this.listeners) {
      const listener = this.listeners[key]
      listener.forEach(callback => {
        callback(data)
      })
    }
  }
}

const chatApi = new Chat()

setTimeout(() => {
  chatApi.publish('online')
}, 2000)

setTimeout(() => {
  chatApi.publish('offline')
}, 4000)

function IsOnline({ id }) {

  const [isOnline, setIsOnline] = useState(null)

  const handleClick = (status) => {
    console.log('handleClick', status);
    setIsOnline(status)
  }

  useEffect(() => {

    console.log('useEffect初始化', isOnline);

    chatApi.subscribe(id, handleClick)

    return () => {

      console.log('卸载', isOnline);

      chatApi.unSubscribe(id, handleClick)
    }

  })

  if (isOnline === null) {
    return 'loading...'
  }

  return isOnline === 'online' ? 'online' : 'offline'
}

function EffectDemo() {

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   console.log('useEffect1');
  // })

  // useEffect(() => {
  //   console.log('useEffect2');
  // })

  return <IsOnline id={1} />
  // return <>
  //   <button onClick={() => { setCount(count + 1) }}>点击</button>
  //   {count}
  // </>
}

export default EffectDemo