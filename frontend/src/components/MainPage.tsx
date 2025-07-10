import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to the Main Page!</h1>
      <p className="text-lg text-gray-700">You have successfully logged in.</p>
      {/* Add more content for the main page here */}
    </div>
  );
};

export default MainPage;
