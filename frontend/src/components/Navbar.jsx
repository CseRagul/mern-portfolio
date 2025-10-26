import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Ragul Portfolio</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#admin">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
