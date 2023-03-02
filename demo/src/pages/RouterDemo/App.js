import React from 'react'
import { BrowserRouter, Route, Link } from '../../router/index'
import Home from '../Home'
import About from '../About'
import User from '../User'


// context不受shouldComponentDidMount影响
const AppDemo = () => {

  return <BrowserRouter>
    <div style={{
      display: 'flex'
    }}>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/user'>user</Link>
    </div>
    <Route path='/' component={<Home />} />
    <Route path='/about' component={<About />} />
    <Route path='/user' component={<User />} />
  </BrowserRouter>
}

export default AppDemo