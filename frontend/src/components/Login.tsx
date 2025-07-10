import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would add actual authentication logic here
    // For example, call an API, validate credentials, etc.

    // Simulate successful login
    console.log('Simulating successful login...');
    onLoginSuccess(); // Call the callback passed from App.tsx
    navigate('/'); // Navigate to the main page after successful login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4">
      <div className="bg-white/30 backdrop-blur-xl shadow-2xl rounded-xl p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-10">Login</h2>
        <form onSubmit={handleSubmit}> {/* Add onSubmit handler to the form */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/90">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 placeholder-white/70"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white/90">
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-white/20 border border-white/30 text-white text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-3 placeholder-white/70"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-lg px-5 py-3 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Login to your account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
