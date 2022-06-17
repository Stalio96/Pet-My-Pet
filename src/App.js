import './App.css';
import { Route, Routes, Link } from "react-router-dom";

import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import MyPet from './components/MyPet/MyPet';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <header id="site-header">
        <nav class="navbar">
          <section class="navbar-dashboard">
            <Link to={'/dashboard'}>Dashboard</Link>
            <div id="guest">
              <Link class="button" to={'/login'}>Login</Link>
              <Link class="button" to={'/register'}>Register</Link>
            </div>
            <div id="user">
              <span>Welcome, </span>
              <Link class="button" to={'/my-pet'}>My Pets</Link>
              <Link class="button" to={'/create'}>Add Pet</Link>
              <Link class="button" to={'/logout'}>Logout</Link>
            </div>
          </section>
        </nav>
      </header>

      <main id="site-content">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/my-pet/:userId' element={<MyPet />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@PetMyPet</p>
      </footer>
    </div>
  );
}

export default App;
