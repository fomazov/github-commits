import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { CommitInfo } from './pages/CommitInfo'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/commit/:hash" component={CommitInfo} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
