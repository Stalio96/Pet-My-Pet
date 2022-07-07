import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from 'react';

import * as authService from './services/authService'

import Header from './components/Header/Header';
import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import MyPet from './components/MyPet/MyPet';
import Register from './components/Register/Register';

function App() {

  let [userInfo, setUserInfo] = useState({isAuthenticated: false, user: ''});

  useEffect(() => {
    let user = authService.getUser();
    console.log(user)

    setUserInfo({
      isAuthenticated: Boolean(user),
      user
    })
  },[])

  const onLogin = (email) => {
    setUserInfo({
      isAuthenticated: true,
      user: email
    })
  }

  const onLogout = (email) => {
    setUserInfo({
      isAuthenticated: false,
      user: null
    })
  }

  return (
    <div className="App">
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login onLogin={onLogin} />} />
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
  );
}

export default App;
