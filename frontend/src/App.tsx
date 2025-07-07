import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">SAP TCode Validator</h1>
        <p className="text-lg text-gray-700 mb-8">
          Frontend (React + Vite + TypeScript + Tailwind CSS)
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            count is {count}
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </header>
    </div>
  )
}

export default App
