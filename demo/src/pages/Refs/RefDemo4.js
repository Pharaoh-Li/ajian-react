import React from "react"

function logProps(Component) {

  class LogProps extends React.Component {
    render() {
      const { forwardedRef, ...rest } = this.props
      return <Component ref={forwardedRef} {...rest} />
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  })
}

class TestComponent extends React.Component {
  render() {
    return <h1>TestComponent</h1>
  }
}

const Child = logProps(TestComponent)

export default class RefDemo4 extends React.Component {

  constructor() {
    super()
    this.childRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.childRef);
  }

  render() {
    return <Child ref={this.childRef} />
  }
}