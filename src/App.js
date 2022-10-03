import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/success', {
          withCredentials: true,
        });
        setUser(res.data.user._json);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
