import React, { useState, useEffect, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

function Navbar() {
  const bg = require('../Assets/banner.jpg');  
  const logo= require('../Assets/Logo.png');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown when clicking on the "Categories" link
  const toggleDropdown = (e) => {
    e.stopPropagation(); 
    setIsDropdownOpen((prevState) => !prevState);
  };

  // Close the dropdown if clicked outside
  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="navbar" style={{ backgroundImage: `url(${bg})` }}>
      <div className="navbar-logo">
      <img src={logo} alt="Background" />

      </div>
      <div className="navbar-links">
        <li>
          <Link to="/"><b>Home</b></Link>
        </li>
        <li
          ref={dropdownRef}
          onMouseEnter={() => setIsDropdownOpen(true)} // Show dropdown on hover
          onMouseLeave={() => setIsDropdownOpen(false)} // Hide dropdown on mouse leave
        >
          <Link to="/Components/Category/Category.js"><b>Categories</b></Link>
          {isDropdownOpen && (
            <ul className="dropdown">
              <li><Link to="/Components/MiniCake/MiniCake.js">Mini Cakes</Link></li>
              <li><Link to="/Components/CelebrationCake/CelebrationCake.js">Celebration Cakes</Link></li>
              <li><Link to="/Components/Loaves/Loaves.js">Cake Loaves</Link></li>
              <li><Link to="/Components/Cupcake/cupcake.js">Cup Cakes</Link></li>
              <li><Link to="/Components/Slice/slice.js">Cake Slices</Link></li>
              <li><Link to="/Components/Cookies/cookie.js">Cookies & Crackers</Link></li>
              <li><Link to="/Components/Eggless/eggless.js">Eggless Collections</Link></li>
              <li><Link to="/Components/Vegan/vegan.js">Vegan Collections</Link></li>
              <li><Link to="/Components/Chocolate/Chocolate.js">Chocolate Collections</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Components/AboutUs/AboutUs.js"><b>About</b></Link>
        </li>
        <li>
          <Link to="/Components/ContactForm/ContactForm.js"><b>Contact Us</b></Link>
        </li>
        <li>
          <Link to="/Components/cart/CartPage.js"><b>Cart</b></Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
