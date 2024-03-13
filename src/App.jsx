import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingtime, setReadingTime] = useState(0)

  const handleAddtoBookmark = blog =>{
     const newBookmarks = [...bookmarks,blog]
     setBookmarks(newBookmarks)
  }

  const handleMarkASRead = time =>{
      setReadingTime(readingtime + time)
  }

  return (
    <>
       <Header></Header>
       <main className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkASRead={handleMarkASRead} ></Blogs>
        <Bookmarks readingtime={readingtime} bookmarks={bookmarks}></Bookmarks>
       </main>
      
    </>
  )
}

export default App




