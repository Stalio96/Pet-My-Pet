import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as authservice from '../../services/authService';

import { useAuthContext } from '../../contexts/AuthContext'

const Logout = () => {
    const { user, logout } = useAuthContext();
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