import './Content.css'
import Post from '../../components/Post/Post'
// import ContentHeader from './ContentHeader/ContentHeader'

function Content () 
{
    return (
        <div className="content-container">
            <div className='content_post'>
                <Post />
            </div>
        </div>
    )
}

export default Content