import React, { useContext } from "react";

const themes = {
  light: {
    background: 'white',
    color: 'black'
  },
  dark: {
    background: 'black',
    color: 'white'
  }
}

const ThemeContext = React.createContext(themes.light)

class ContextHookDemo extends React.Component {

  constructor() {
    super()
    this.state = {
      style: themes.dark
    }
  }

  render() {
    return <ThemeContext.Provider value={this.state.style}>
      <button onClick={() => {
        this.setState({
          style: this.state.style === themes.dark ? themes.light : themes.dark
        })
      }}>点击切换主题</button>
      <Father />
    </ThemeContext.Provider>
  }
}

function Father() {
  return <Button />
}

function Button() {

  const theme = useContext(ThemeContext)

  return <button style={theme}>this is a button</button>
}

export default ContextHookDemo;
