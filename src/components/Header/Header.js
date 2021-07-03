import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../UserContext';
import header from '../../components/grocery_shopping.jpg';
import './Header.css';

const Header = () => {
  
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
        <nav className="nav">
            <ul>
              
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                <Link  to ="Orders">Orders</Link>
                </li>
                <li>
                <Link  to ="/AddProduct">Admin</Link>
                </li>

                <li>
                <Link to ="/CheckOut">Deals</Link>
                </li>
            </ul>
        </nav>

        <div className="title-container">
                <h1>FRESH ZONE BAZAR</h1>
                <h2>A store house of your Fresh Food</h2>
            </div>
        </div>



       
    );
};

export default Header;
