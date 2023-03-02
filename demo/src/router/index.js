import React, { createContext, useState, useContext, useEffect } from "react"

const RouterContext = createContext()

const BrowserRouter = (props) => {

  const [path, setPath] = useState(() => {
    const { pathname } = window.location
    return pathname || '/'
  })

  const push = (path) => {
    setPath(path)
    window.history.pushState({ path }, '', path)
  }

  const handlePopstate = () => {
    const { pathname } = window.location
    setPath(pathname)
  }

  const router = {
    path,
    push,
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePopstate)

    return () => {
      window.removeEventListener('popstate', handlePopstate)
    }
  }, [])

  return <RouterContext.Provider value={router}>
    {props.children}
  </RouterContext.Provider>
}

const Route = (props) => {

  const { path, component: Component } = props

  const router = useContext(RouterContext)

  return router.path === path ? Component : null
}

const Link = (props) => {

  const { to } = props

  const router = useContext(RouterContext)

  const goPath = () => {
    router.push(to)
  }

  return <div
    onClick={goPath}
    style={{
      width: '80px',
      height: '30px',
      border: '1px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      margin: '10px'
    }}>
    {props.children}
  </div>
}

export {
  BrowserRouter,
  Route,
  RouterContext,
  Link,
}