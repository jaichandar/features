import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import { posts } from './components/data';
import './index.scss';

const Notification = () => {
    const socket = io('http://localhost:3000');
    const [username, setUserName] = useState('');
    const [user, setUser] = useState('');


    useEffect(() => {
        if(user !== '') {
            socket.emit('newUser', user);
        }
    }, [user]);

    return (
        <div className='container'>
            {
                user ? (
                    <div className='card-wrapper'>
                        <Navbar socket={socket}/>
                        {
                            posts.map((val) => {
                                return (
                                    <Card posts={val} socket={socket} user={user} key={val.id}/>
                                )
                            })
                        }
                        <span className='username'>{user}</span>
                    </div>
                ) : (
                    <div className='login'>
                        <input
                            onChange={(e) => setUserName(e.target.value)}
                            value={username}
                            placeholder='Enter username' />
                        <button onClick={() => setUser(username)}>Login</button>
                    </div>
                )
            }
        </div>
    )
}

export default Notification;