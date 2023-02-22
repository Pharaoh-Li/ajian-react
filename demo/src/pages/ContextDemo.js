import React, { Component } from 'react'

//  1、创建默认值
const ThemeContext = React.createContext('dark')
export default class ContextDemo extends Component {
  render() {
    return (
      // 2、使用context的provider进行包裹
      <ThemeContext.Provider value='light'>
        <Toolbar />
      </ThemeContext.Provider>
      // <Toolbar />
    )
  }
}

function Toolbar() {
  return <ThemeButtom />
}

class ThemeButtom extends Component {

  // contextType 关键字
  static contextType = ThemeContext

  render() {
    return <button>按钮{this.context}</button>
  }
}

// ThemeButtom.contextType = ThemeContext //