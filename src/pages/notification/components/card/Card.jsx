import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa'
import { GrLike } from 'react-icons/gr';
import { GoShare } from 'react-icons/go'
import { CiCircleInfo } from 'react-icons/ci'
import './card.scss';


const Card = ({ posts, socket, user }) => {

    const style = {
        fontSize: '1.3rem',
        margin: '10px 10px',
        cursor: 'pointer',
        color: 'red'
    }

    const [like, setLike] = useState(false);

    const handleLike = (type) => {
        setLike(!like);
        socket.emit('sendNotification', {
            user,
            receiver: posts.username,
            type,
        })
    }

    return (
        <div className='card'>
            <div className='card-wrapper'>
                <div className='img-wrap'>
                    <img src={posts.userImg} />
                    <p>{posts.username}</p>
                </div>
                <div className='post-img'>
                    <img src={posts.postImg} />
                </div>
                <div className='interactions'>
                    <div>
                        <GrLike style={like ? style : { ...style, color: 'initial' }} onClick={() => handleLike(1)} />
                        <FaRegComment style={{ fontSize: '1.3rem', margin: '10px 10px', cursor: 'pointer' }} onClick={() => handleLike(2)}/>
                        <GoShare style={{ fontSize: '1.5rem', margin: '10px 10px', cursor: 'pointer' }} onClick={() => handleLike(3)}/>
                    </div>
                    <div>
                        <CiCircleInfo style={{ fontSize: '1.3rem', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
