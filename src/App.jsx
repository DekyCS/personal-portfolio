import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Contact from './pages/contact'
import HelloWorld from './pages/blog/hello-world'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/hello-world" element={<HelloWorld />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
