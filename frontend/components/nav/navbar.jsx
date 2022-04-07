import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';





function Navbar(props) {
  const [click, setClick] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [signedIn, setSignedIn] = useState(false)

  const handleFurnitureDropdown = () => {
    console.log("hooks", props)
    if (search === true) {
      setSearch(false)
    };
    if (cart === true) {
      setCart(false)
    };
    if (wishlist === true) {
      setWishlist(false)
    };
    setFurniture(!furniture)
  }

  const handleSearchDropdown = () => {
    if (furniture === true) {
      setFurniture(false)
    };
    if (cart === true) {
      setCart(false)
    };
    if (wishlist === true) {
      setWishlist(false)
    };
    setSearch(!search);
  };

  const handleCartDropdown = () => {
    if (furniture === true) {
      setFurniture(false)
    };
    if (search === true) {
      setSearch(false)
    };
    if (wishlist === true) {
      setWishlist(false)
    };
    setCart(!cart);
  }
  
  const handleWishlistDropdown = () => {
    if (furniture === true) {
      setFurniture(false)
    };
    if (search === true) {
      setSearch(false)
    };
    if (cart === true) {
      setCart(false)
    };
    setWishlist(!wishlist);
  }
    
  const closeDropDowns = () => {
    if (search === true) {
      setSearch(false)
    };
    if (cart === true) {
      setCart(false)
    };
    if (furniture === true) {
      setFurniture(false)
    };
  }


  const closeMobileMenu = () => setClick(false);

  
  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false)
  //   } else {
  //     setDropdown(false)
  //   };
  // };
  
  return (
    // have to change the search, wishlist and cart to icons later
    <>
      <nav className='navbar'>
        {/* <div className='menu-icon' onClick={handleClick}>

          <i className={click ? 'fas fa-times' : 'fas fa-fa-bars'} />
        </div> */}
        <div className="nav-menu">
          
          <div className='nav-menu-left'>
            <span className='nav-items-left' onClick={handleFurnitureDropdown} >
              FURNITURES
              <i className={furniture ? 'fas fa-chevron-up' : 'fas fa-chevron-down'} />
            </span>
              {furniture && <Dropdown
                dropdownType={'furnitures'} 
                handleFurnitureDropdown={handleFurnitureDropdown}
              />
              }

            <span className='nav-items'
              onClick={handleSearchDropdown}
            >
              <BsIcons.BsSearch className="nav-icons"/>
            </span>

              {search && <Dropdown
                dropdownType={'search'}
                handleSearchDropdown={handleSearchDropdown}
              />}
          </div>

          <div className='nav-menu-middle'>
            <li className='nav-items'>
              <Link to='/' className='title' onClick={closeDropDowns} style={{textDecoration: 'none', color: 'black'}}>
                TwentyWon
              </Link>
            </li>
          </div>

          <div className='nav-menu-right'>
            <span className='nav-items'>
              <Link to='/' className='nav-links' onClick={handleWishlistDropdown}>
                {/* WISHLIST */}
              </Link>
              {/* {wishlist && <Dropdown
              dropdownType={'wishlist'}
              handleWishlist={handleWishlistDropdown}
            />} */}
            </span>

            <span className='nav-items'
              onClick={handleCartDropdown}
            >
              <BsIcons.BsHandbag className="nav-icons"/>
            </span>
              {cart && <Dropdown
                dropdownType={'cart'}
                handleCartDropdown={handleCartDropdown}
              />}

            <span className='nav-items'>
              <Link to='/login' className='accounts-button' onClick={closeDropDowns} style={{ color: 'black' }}> 
                <BiIcons.BiUser className='nav-icons'/>
              </Link>
            </span>

          </div>
        </div>

      </nav>
    </>
  );
}


export default Navbar;