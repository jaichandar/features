import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate('/pagination')}>Pagination</button>
            <button onClick={() => navigate('/notification')}>Notification app</button>
        </div>
    )
}

export default Dashboard;