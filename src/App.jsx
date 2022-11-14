import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header, BlockMenu } from './components'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='page'>
        <Header/>
        <Routes>
          <Route path='/' element={
              <div>
                <BlockMenu/>
                
              </div>
          }/>
        </Routes>
      </div>
    </>
  )
}

export default App
