import React, { Component } from 'react'

class Home extends Component {

  handleClick = () => {
    console.log('home');
  }

  render() {
    return <div onClick={this.handleClick}>home</div>
  }
}

export default class RefDemo1 extends Component {

  constructor() {
    super()
    this.inp_ref = React.createRef()
    this.home_ref = React.createRef()
  }

  onInpFocus = () => {
    // this.inp_ref.current.focus()
    this.home_ref.current.handleClick()
  }

  componentDidMount() {
    console.log(this.home_ref);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inp_ref} />
        <button onClick={this.onInpFocus}>点击聚焦</button>
        <Home ref={this.home_ref} />
      </div>
    )
  }

}
