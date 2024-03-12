import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddtoBookmark = blog =>{
     console.log('bookmark adding soon');
  }

  return (
    <>
       <Header></Header>
       <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmark={handleAddtoBookmark}></Blogs>
        <Bookmarks></Bookmarks>
       </main>
      
    </>
  )
}

export default App




