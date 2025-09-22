import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Successed from './Successed';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Spinner from './Spinner';
import styled from 'styled-components';

function App() {
  const [user, setUser] = useState(undefined); // undefined = 초기 로딩

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <LoadingContainer><Spinner /></LoadingContainer>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="/successed" replace /> : <Login />}
        />
        <Route
          path="/successed"
          element={user ? <Successed /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;