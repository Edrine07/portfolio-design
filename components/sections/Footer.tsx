import React from 'react'

export default function Footer() {
  return (
    <footer className="text-gray-400 px-4 text-center">
      <div className="max-w-md mx-auto space-y-1">
        <div>
        <h2 className="text-lg">Thanks for visiting</h2>
        <p className="text-sm text-gray-400">Stay awesome</p>
        </div>
        
        <div className="py-2">

        </div>
        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Made By Edrine Hagosojos</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
