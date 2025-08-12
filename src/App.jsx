import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Blog from './pages/blog'
import Contact from './pages/contact'
import HelloWorld from './pages/blog/hello-world'
import ScrollToTop from './components/scroll-to-top'
import HackathonChina from './pages/blog/hackathon-china'

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/hello-world" element={<HelloWorld />}/>
        <Route path="/blog/hackathon-china" element={<HackathonChina />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  )
}

export default App
