import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import MainPage from './components/MainPage';
// import { useState, useEffect } from 'react' // Temporarily commented out if not used for global state yet

function App() {
  // For this example, we'll assume a simple auth state.
  // In a real app, this would be managed more robustly (e.g., context, Redux, Zustand).
  // For now, let's imagine a scenario where if there's a token, the user is "logged in".
  // This is a placeholder and will be improved with actual login logic.
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('fakeAuthToken'));

  // This function would be called by the Login component upon successful login
  const handleLogin = () => {
    localStorage.setItem('fakeAuthToken', 'dummyToken'); // Simulate token storage
    setIsAuthenticated(true);
  };

  // This function would be called to log out
  // const handleLogout = () => {
  //   localStorage.removeItem('fakeAuthToken');
  //   setIsAuthenticated(false);
  // };


  // const [backendVersion, setBackendVersion] = useState<string | null>(null) // Temporarily commented out
  // const [error, setError] = useState<string | null>(null) // Temporarily commented out

  // useEffect(() => { // Temporarily commented out
  //   const fetchBackendVersion = async () => {
  //     try {
  //       const response = await fetch('/api/version')
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`)
  //       }
  //       const version = await response.text()
  //       setBackendVersion(version)
  //     } catch (e) {
  //       if (e instanceof Error) {
  //         setError(e.message)
  //       } else {
  //         setError('An unknown error occurred')
  //       }
  //       console.error("Failed to fetch backend version:", e)
  //     }
  //   }
  //   fetchBackendVersion()
  // }, [])

  return (
    <Routes>
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/" /> : <Login onLoginSuccess={handleLogin} />}
      />
      <Route
        path="/"
        element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />}
      />
      {/* Add other routes here */}
      <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} /> {/* Redirect unmatched paths */}
    </Routes>
  )
}

export default App;
