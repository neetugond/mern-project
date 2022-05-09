import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Navbar = () => {
  return (
      <div className='navbar-main-div'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
    
       <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Registration</a>
        </li>
      </ul>
</div>
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar