import React from 'react'

function Footer() {
  return (
    <>
     
      <footer className="text-white w-full py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1>DSA-Drive</h1>
          </div>
          <div>
            <p>© {new Date().getFullYear()} DSA-Drive</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer