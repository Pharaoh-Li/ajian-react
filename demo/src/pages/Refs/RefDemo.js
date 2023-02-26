import React, { Component } from 'react'

export default class RefDemo extends Component {

  constructor() {
    super()
    this.div_ref = React.createRef()
    console.log('constructor', this.div_ref);
  }

  componentDidMount() {
    console.log('componentDidMount', this.div_ref);
  }

  render() {
    console.log('render', this.div_ref);
    return (
      <div ref={this.div_ref}>RefDemo</div>
    )
  }

}
