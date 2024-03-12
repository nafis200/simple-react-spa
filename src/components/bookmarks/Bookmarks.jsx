

import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="w-1/3 bg-gray-400 ml-4 mt-2 p-2">
             <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
             {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark> )
             }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks:PropTypes.array
}

export default Bookmarks
