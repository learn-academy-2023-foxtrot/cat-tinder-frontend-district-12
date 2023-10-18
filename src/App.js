import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import TributeEdit from './pages/TributeEdit'
import TributeIndex from './pages/TributeIndex'
import TributeNew from './pages/TributeNew'
import TributeShow from './pages/TributeShow'
import Header from './components/Header'
import Footer from './components/Footer'
import MockTribute from './MockTribute'
import { Routes, Route} from "react-router-dom"
import React, {useState} from 'react'


const App = () =>  {
const [tribute, setTribute] = useState(MockTribute)

console.log(tribute)
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tributeindex" element={<TributeIndex />} />
      <Route path="/tributeshow" element={<TributeShow />} />
      <Route path="/tributenew" element={<TributeNew />} />
      <Route path="/tributeedit" element={<TributeEdit />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;