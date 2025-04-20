import React from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home'
// set up the react router dom
import Create from './components/CreateBook'
import Edit from  './components/EditBook'
import Delete from './components/MyBooks'
function App() {


  return (

        <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes> 
        </div>
  )
}

export default App
