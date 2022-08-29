import './Post.css'
import postPicture from '../../assets/IMG_0925.JPG'
import contentPic from '../../assets/301501022_5359095107540151_9085903540434448165_n.jpeg'
import contentPic2 from '../../assets/301343292_101440539353543_1811506721654809297_n.jpeg'
import contentPic3 from '../../assets/301343292_101440539353543_1811506721654809297_n.jpeg'

import { ActivityFeed, Bookmark, Comments, Options, Share } from '../Icons/Index'

import { Box, Carousel, Image } from 'grommet'

function Post ()
{
    return (
        <div className='post_container'>
            <div className='post_header'>
                <div className='post_avatar'>
                    <div className='circle_canvas'>
                        <img alt='post-img' src={postPicture} className={'post_header_pic'}/>
                    </div>
                    <div className='post_account_name'>
                        <p>giannis_an34</p>
                    </div>
                </div>
                <div className='post_options'>
                    <Options />
                </div>
            </div>
            <div className='post_pic'>
                {/* <img alt='content-pic' src={contentPic}  className={'post_content_pic'}/> */}
                <Box>
                    <Carousel fill>
                        <Image fit='cover' src={contentPic} className={'post_content_pic'}/>
                        <Image fit='cover' src={contentPic2} className={'post_content_pic'}/>
                        <Image fit='cover' src={contentPic3} className={'post_content_pic'}/>
                    </Carousel>
                </Box>
            </div>
            <div className='post_actions'>
                <div className='post_left_actions'>
                    <div className='post_actions_icon'>
                        <ActivityFeed />
                    </div>
                    <div className='post_actions_icon'>
                        <Comments />
                    </div>
                    <div className='post_actions_icon'>
                        <Share />
                    </div>
                </div>
                <div className='post_right_actions'>
                    <Bookmark />
                </div>
            </div>
            <div className='post_footer'>

            </div>
        </div>
    )
}

export default Post