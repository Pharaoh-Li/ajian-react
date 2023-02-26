import React from "react";
import hoistNonReactStatics from 'hoist-non-react-statics'

function withHoc(WrapComponent) {

  class Result extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props
      return <WrapComponent ref={forwardRef} {...rest} />
    }
  }

  const forwardResult = React.forwardRef((props, ref) => (
    <Result {...props} forwardRef={ref} />
  ))


  hoistNonReactStatics(forwardResult, WrapComponent)

  return forwardResult
}


class TestDemo extends React.Component {

  static getName = () => {
    console.log('getName');
  }

  static getAge = () => {
    console.log('getAge');
  }

  static age = 23

  render() {
    return <h1>TestDemo</h1>
  }
}

const HocTestDemo = withHoc(TestDemo)

// TestDemo.getName() //getName
// HocTestDemo.getName()
// HocTestDemo.getAge()
// console.log(TestDemo.age);
// console.log(HocTestDemo.age);


export default class HocApp extends React.Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    console.log(this.ref);
  }

  render() {
    return <HocTestDemo ref={this.ref} />
  }
}