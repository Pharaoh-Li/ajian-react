import React, { Component } from 'react'

const RefButton = React.forwardRef((props, ref) => {
  return <button ref={ref}>{props.children}</button>
})

export default class RefDemo3 extends Component {

  constructor() {
    super()
    this.buttonRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.buttonRef);
  }

  render() {
    return (
      <div>
        <RefButton ref={this.buttonRef}>点击</RefButton>
      </div>
    )
  }
}
