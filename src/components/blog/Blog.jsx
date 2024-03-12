
import PropTypes from 'prop-types'
const Blog = ({blog}) => {
    const {title,cover,author,img,reading_time,posted_date,hashtag} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of title`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={author} alt="" />
                    <div>
                        <h3 className=' text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>{
                hashtag.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>  )   
            }</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;
