"use client"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav 
        className="navbar navbar-expand-lg bg-white shadow-sm">
        <div 
            className="container">
        <Link 
            href="/"
            className='fs-3 lucida navbar-brand'>Rick and Morty <span className="text-primary">DB</span></Link>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
        </button>
        <div 
            className="collapse navbar-collapse justify-content-end" 
            id="navbarNavAltMarkup">
        <div 
            className="navbar-nav">
        <Link 
            className="nav-link" 
            aria-current="page" 
            href="/">Charaters
        </Link>
        <Link 
            className="nav-link" 
            href="/locations"
            >
                Locations
        </Link>
        <Link 
            className="nav-link" 
            href="/episodes">
                Episodes
        </Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar