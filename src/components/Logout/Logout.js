import { Navigate } from 'react-router-dom';
import * as authservice from '../../services/authService';

const Logout = ({
    onLogout
}) => {
    authservice.logout();
    onLogout();

    return <Navigate to={"/login"} replace={true}/>;
}

export default Logout;