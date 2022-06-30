import React from 'react'

function NavBar(){
    return(
        <>

<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  
  <a className="navbar-brand" href="#">
      MOVIE SHOW
  </a>

  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Movies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">TV Shows</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">People</a>
      </li>
    </ul>
  </div>
</nav>




        </>
    )
}

export default NavBar