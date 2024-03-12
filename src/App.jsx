import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header></Header>
       <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
       </main>
      
    </>
  )
}

export default App




