
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Newsletter from './pages/newsletter/Newsletter'
import ItemDetail from './pages/itemDetail/ItemDetail'
import Cart from './pages/cart/Cart'
import About from './pages/about/About'

function App() {

  return (
    <Router >
      <Layout>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
      </Layout>
    </Router>
  )
}

export default App
