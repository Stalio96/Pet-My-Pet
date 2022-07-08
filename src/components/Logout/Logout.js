import { Navigate, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import * as authservice from '../../services/authService';

import { AuthContext } from '../../contexts/AuthContext'

const Logout = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authservice.logout(user.accessToken)
        .then(() => {
            logout();
            navigate('/login');
        });
    }, []);

    return null;
}

export default Logout;