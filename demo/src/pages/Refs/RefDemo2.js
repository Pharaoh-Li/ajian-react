import React, { Component } from 'react'

class Child extends Component {
  render() {
    return <div>
      children
      <input ref={this.props.inputRef} />
    </div>
  }
}

export default class RefDemo2 extends Component {

  componentDidMount() {
    console.log(this.inputRef);
  }

  // 回调函数获取子组件ref
  refCallback = el => {
    this.inputRef = el
  }

  render() {
    return (
      <div>
        <Child inputRef={this.refCallback} />
      </div>
    )
  }
}
