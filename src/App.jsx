import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header></Header>
       <Blogs></Blogs>
      
    </>
  )
}

export default App


