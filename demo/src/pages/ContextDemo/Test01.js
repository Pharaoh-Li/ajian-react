import React, { Component } from 'react'

//  1、创建默认值
const ThemeContext = React.createContext('dark')
export default class ContextDemo1 extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('ContextDemo1 render');
    return (
      // 2、使用context的provider进行包裹
      <ThemeContext.Provider value={this.state.count}>
        <button onClick={this.handleClick}>点击加1</button>
        <Toolbar />
      </ThemeContext.Provider>
      // <Toolbar />
    )
  }
}

// function Toolbar() {
//   console.log('toolbar render');
//   return <ThemeButtom />
// }

class Toolbar extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    console.log('toolbar render');
    return <ThemeButtom />
  }
}

class ThemeButtom extends Component {

  // contextType 关键字
  static contextType = ThemeContext

  render() {
    console.log('ThemeButtom render');
    return <button>按钮{this.context}</button>
  }
}

// ThemeButtom.contextType = ThemeContext //