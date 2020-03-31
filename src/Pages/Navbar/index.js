import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Navbar extends React.Component {
  render() {
      return (
          <React.Fragment>
          <nav className="navbar">
              <Link to ='./HomePage/index'>
                  <span className="navbarBrand">Marvels</span>
              </Link>
              <span className="navbarText">Create Meetup</span>
              <span className="navbarText">Explore</span>
              {/* //This should bring to the Login page */}
              <Link to='./Pages/Login'> 
                  <button className="navbarLink">Login</button>
              </Link>
          </nav>
          </React.Fragment>
        );
      }
  }

export default Navbar;