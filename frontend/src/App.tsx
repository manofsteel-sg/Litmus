import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [backendVersion, setBackendVersion] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBackendVersion = async () => {
      try {
        // Assuming the backend is running on port 8080 and accessible via localhost
        // Adjust the URL if your backend is running on a different port or host
        const response = await fetch('/api/version')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const version = await response.text()
        setBackendVersion(version)
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message)
        } else {
          setError('An unknown error occurred')
        }
        console.error("Failed to fetch backend version:", e)
      }
    }

    fetchBackendVersion()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">SAP TCode Validator</h1>
        <p className="text-lg text-gray-700 mb-2">
          Frontend (React + Vite + TypeScript + Tailwind CSS)
        </p>
        {backendVersion && (
          <p className="text-md text-green-600 mb-2">
            Backend Version: {backendVersion}
          </p>
        )}
        {error && (
          <p className="text-md text-red-600 mb-2">
            Error fetching backend version: {error}
          </p>
        )}
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
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
