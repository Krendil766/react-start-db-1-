import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to='/'>StartDb</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/people/'>People</Link>
        </li>
        <li>
          <Link to='/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/starships/'>Starships</Link>
        </li>
        <li>
          <Link to='/secret'>Secret</Link>
        </li>
      </ul>
      <div className='d-flex justify-content-sm-between w-100'>
        <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
          Change Service
        </button>
        <button
          className="btn btn-danger d-flex">
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;