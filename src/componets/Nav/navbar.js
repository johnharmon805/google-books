import React from "react";

function Nav() {
  return (
    <nav>
<ul className="nav justify-content-center" id="navbar">
  <li className="nav-item">
    <a className="nav-link" href="#">Search</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Saved</a>
  </li>
</ul>
     <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">Google Books</h1>
    <p className="lead">by John Harmon</p>
  </div>
</div>
</nav>
  );
}

export default Nav;