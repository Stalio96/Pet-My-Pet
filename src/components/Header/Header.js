import { Link } from "react-router-dom";

const Header = ({
    email
}) => {
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to={'/dashboard'}>Dashboard</Link>
                    {email
                        ? <div id="user">
                            <span>Welcome, {email}</span>
                            <Link className="button" to={'/my-pet'}>My Pets</Link>
                            <Link className="button" to={'/create'}>Add Pet</Link>
                            <Link className="button" to={'/logout'}>Logout</Link>
                        </div>
                        : <div id="guest">
                            <Link className="button" to={'/login'}>Login</Link>
                            <Link className="button" to={'/register'}>Register</Link>
                        </div>
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;