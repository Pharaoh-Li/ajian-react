import React, { Component } from 'react'

// 错误边界组件
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  
  // 发生错误时触发
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // 上报错误
    console.log(error, errorInfo);
  }

  render() {
    // throw '自身错误' //不能捕获自身错误
    if (this.state.hasError) {
      return (
        <div>Something Wrong!</div>
      )
    }
    return this.props.children
  }
}

function Child() {
  // throw 'child error'
  return <div>child</div>
}

// 可以捕获到所有子节点的错误
function Home() {
  //无法捕获事件错误
  // const handleClick = () => {
  //   throw 'error'
  // }
  // throw new Error('发生错误')

  // 捕获事件错误
  // 用try catch
  const handleClick = () => {
    try {
      throw 'error'
    } catch (e) {
      // 上报错误
      console.log(e);
    }
  }
  return <div onClick={handleClick}>
    Home
    <Child />
  </div>
}

export default class App extends Component {
  render() {
    return <ErrorBoundary><Home /></ErrorBoundary>
  }
}