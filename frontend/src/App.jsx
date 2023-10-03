import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Flowbite React</h1>
        </div>
      </nav>

      {/* Main content / Hero Section */}
      <main className="flex-grow">
        <section className="hero bg-gray-100 py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl mb-4">Welcome to Flowbite React App</h1>
            <p className="text-gray-600 mb-8">
              This is a simple example page using Flowbite with React.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Flowbite React. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
