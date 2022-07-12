import { Link } from "react-router-dom";
import { useContext } from "react";

import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const { user } = useAuthContext();

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to={'/dashboard'}>Dashboard</Link>
                    {user.email
                        ? <div id="user">
                            <span>Welcome, {user.email}</span>
                            <Link className="button" to='/my-pets'>My Pets</Link>
                            <Link className="button" to='/create'>Add Pet</Link>
                            <Link className="button" to='/logout'>Logout</Link>
                        </div>
                        : <div id="guest">
                            <Link className="button" to='/login'>Login</Link>
                            <Link className="button" to='/register'>Register</Link>
                        </div>
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;