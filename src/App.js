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
import { Routes, Route} from "react-router-dom"
import React, { useState, useEffect } from 'react'


const App = () =>  {
const [tributes, setTributes] = useState([])



const readTribute = () => {
  fetch("http://localhost:3000/tributes")
  .then((response) => response.json())
  .then((payload) => setTributes(payload))
  .catch((error) => console.log(error))
}

useEffect (() => {
  readTribute()
}, [])

const createTribute = (newTribute) => {
  fetch("http://localhost:3000/tributes", {
    body: JSON.stringify(newTribute),
    headers:{
      "Content-Type": "application/json"
    },
    method: "POST"
  })
  .then((response) => response.json())
  .then(() => readTribute())
  .catch((error) => console.log("Tribute created error:", error))
}

const updateTribute = (editTribute, id) => {
  console.log("editTribute:", editTribute);
  fetch(`http://localhost:3000/tributes/${id}`, {
    body: JSON.stringify(editTribute),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
  })
  .then((response) => response.json())
  .then(() => readTribute())
  .catch((errors) => console.log("Tribute update errors:", errors))
  
}
const deleteTribute = (id) => {
  fetch(`http://localhost:3000/tributes/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  })
    .then((response) => response.json())
    .then(() => readTribute())
    .catch((errors) => console.log("delete errors:", errors))
}

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tributes" element={<TributeIndex tributes={tributes} />} />
      <Route path="/tributes/new" element={<TributeNew createTribute={createTribute} />} />
      <Route path="/tributes/:id" element={<TributeShow tributes={tributes} deleteTribute={deleteTribute} />} />
      <Route path="/tributes/:id/edit" element={<TributeEdit updateTribute={updateTribute} tributes={tributes} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App