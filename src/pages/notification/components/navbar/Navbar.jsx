import React, { useEffect, useState } from 'react';
import { FaMessage } from 'react-icons/fa6';
import { IoMdNotifications } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci'
import './navbar.scss';

const Navbar = ({ socket }) => {
    const [notification, setNotification] = useState([]);

    const style = {
        height: 'fit-content',
        width: '20px',
        borderRadius: '50%',
        backgroundColor: 'red',
        color: '#fff',
        textAlign:'center',
        position: 'absolute',
        top: '-15px',
        left: '10px'
    }

    useEffect(() => {
        socket.on('getNotification', (value) => {
            setNotification((prev) => ([...prev, value]))
        })
    }, [socket]);

    console.log(notification, '<-- notification')

    return (
        <div className='navbar'>
            <p>Push-Notification</p>
            <div className='icon-wrapper'>
                <div className='icon-cont'>
                    <FaMessage style={{ fontSize: '1.3rem' }}/>
                    {
                        notification.length ? <p style={style}>{notification.length}</p> : null}
                </div>
                <div className='icon-cont'>
                    <IoMdNotifications style={{ fontSize: '1.5rem' }}/>
                    <p style={style}>2</p>
                </div>
                <div className='icon-cont'>
                    <CiSettings style={{ fontSize: '1.5rem' }}/>
                    <p style={style}>2</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
