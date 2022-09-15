import './Post.css'

import { useAuthValue } from '../../Auth/AuthContext'

import postPicture from '../../assets/44884218_345707102882519_2446069589734326272_n.jpeg'
import contentPic from '../../assets/301501022_5359095107540151_9085903540434448165_n.jpeg'
import contentPic2 from '../../assets/301343292_101440539353543_1811506721654809297_n.jpeg'
import contentPic3 from '../../assets/302123151_431457285626839_5595447326948725703_n.jpeg'

import { ActivityFeed, Bookmark, Comments, Emotions, Options, Share } from '../Icons/Index'

import { Box, Carousel, Image } from 'grommet'

function Post ()
{

    const {currentUser} = useAuthValue() 

    return (
        <div className='post_container'>
            <div className='main_post'>
                <div className='post_header'>
                    <div className='post_avatar'>
                        <div className='circle_canvas'>
                            <img alt='post-img' src={postPicture} className={'post_header_pic'}/>
                        </div>
                        <div className='post_account_name'>
                            <p>{currentUser?.email}</p>
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
                    <div className='post_like'>
                        <p>160,693 likes</p>
                    </div>
                    <div className='post_details'>
                    Cascading Style Sheets, fondly referred to as CSS, is a simply designed language
                    intended to simplify the process of
                    making web pages presentable.
                    </div>
                    <div className='post_view_comments'>
                        <p>View all comments</p>
                    </div>
                </div>
            </div>

            <div className='post_comments'>
                <div className='post_comments_left'>
                    <div className='emotions'>
                        <Emotions />
                    </div>
                    <div className='post_input_comment'>
                        <input type={'text'}  placeholder='Add a comment...' className='post_add_comment'/>
                    </div>
                </div>
                <div className='post_comments_right'>
                    <p>Post</p>
                </div>
            </div>
        </div>
    )
}

export default Post