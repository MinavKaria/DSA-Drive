import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './configs/router'
import ContextProvider from './provider/Context'

function App() {
  
  return (
    <>
      <div className='text-white '>
      <ContextProvider>
        <RouterProvider router={router}/>
      </ContextProvider>
      </div>
    </>
  )
}

export default App
