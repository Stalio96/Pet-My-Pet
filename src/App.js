import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Link } from "react-router-dom";

import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

import ErrorBoundary from './components/Common/ErrorBoundary';
import PrivateRoute from './components/Common/PrivateRoute';
import GardedRoute from './components/Common/GardedRoute';

import Header from './components/Header/Header';
import Create from './components/Create/Create';
import Dashboard from './components/Dashboard/Dashboard';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Login from './components/Login/Login';
import MyPet from './components/MyPet/MyPet';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import Notification from './components/Common/Notification';

function App() {

  return (
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
          <div className="App">
            <Header />

            <Notification />

            <main id="site-content">
              <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/login' element={<Login />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/register' element={<Register />} />
                <Route path='/details/:petId' element={<Details />} />
                <Route path='/my-pets' element={<PrivateRoute><MyPet /></PrivateRoute>} />

                <Route element={<GardedRoute />}>
                  <Route path='/edit/:petId' element={<Edit />} />
                  <Route path='/create' element={<Create />} />
                </Route>
              </Routes>
            </main>

            <footer id="site-footer">
              <p>@PetMyPet</p>
            </footer>
          </div>
        </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
