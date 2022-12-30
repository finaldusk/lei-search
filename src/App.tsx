import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import routes from './router'

function App() {
  return (
    <div>
      <Header></Header>
      <Suspense fallback="loading...">
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
