import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddtoBookmark = blog =>{
     const newBookmarks = [...bookmarks,blog]
     setBookmarks(newBookmarks)
  }

  return (
    <>
       <Header></Header>
       <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmark={handleAddtoBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
       </main>
      
    </>
  )
}

export default App




