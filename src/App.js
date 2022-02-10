import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './main.css'
import Navbar from './components/Nav'
import Home from './components/HomePage'
import BlogDetail from './components/BlogDetails'
import NewBlog from './components/NewBlog'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/new-blog'>
              <NewBlog />
            </Route>
            <Route path='/blog-detail/:id'>
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
