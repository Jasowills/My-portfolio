import React from 'react';

const Navbar = ({ onNavClick, currentPage }) => {
  const handleNavClick = (link) => {
    onNavClick(link);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['About', 'Resume', 'Projects', 'Contact'].map((link) => (
          <li key={link} className="navbar-item">
            <button
              className={`navbar-link ${currentPage === link ? 'active' : ''}`}
              data-nav-link
              onClick={() => handleNavClick(link)}
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
