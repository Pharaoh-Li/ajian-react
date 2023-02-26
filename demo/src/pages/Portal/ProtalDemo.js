import React, { Component } from 'react'
import ReactDOM from 'react-dom'


// ReactDOM.createPortal 适用于通用弹窗或loading
// 通过Protal创建的组件，冒泡顺序会遵循react组件树的顺序
class Home extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <h1>我是home</h1>,
      document.querySelector('#root')
    )
  }
}

export default class ProtalDemo extends Component {
  render() {
    return (
      <div>
        <h1>hello, world</h1>
        <Home />
      </div>
    )
  }
}

