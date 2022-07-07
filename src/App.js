import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

// import * as authService from './services/authService'
import { AuthContext } from './contexts/AuthContext';

import Header from './components/Header/Header';
import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import MyPet from './components/MyPet/MyPet';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';

function App() {
  const [user, setUser] = useState({
    accessToken: '',
    email: '',
    _id: ''
  });

  // useEffect(() => {
  //   let user = authService.getUser();

  //   setUserInfo({
  //     isAuthenticated: Boolean(user),
  //     user
  //   })
  // }, [])

  const onLogin = (authData) => {
    setUser(authData);
  }

  const onLogout = (email) => {
    
  }

  return (
    <AuthContext.Provider value={true}>
      <div className="App">
        <Header email={user.email} />

        <main id="site-content">
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login onLogin={onLogin} />} />
            <Route path='/logout' element={<Logout onLogout={onLogout} />} />
            <Route path='/register' element={<Register />} />
            <Route path='/details/:petId' element={<Details />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:petId' element={<Edit />} />
            <Route path='/my-pet/:userId' element={<MyPet />} />
          </Routes>
        </main>

        <footer id="site-footer">
          <p>@PetMyPet</p>
        </footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
