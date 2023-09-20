import React, { useState } from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import MainWindow from './Components/MainWindow/MainWindow'
import { createContext } from 'react'
export const cronusContext = createContext(null)

function App() {
  const [pop, setPop] = useState(null)

  return (
    <cronusContext.Provider value={{pop , setPop}}>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/mainwindow' element={<MainWindow/>}></Route>
   </Routes>
   
   
   </BrowserRouter>
   </cronusContext.Provider>
  )
}

export default App