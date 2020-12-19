import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as  } from '../../assets/crown.svg'
import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'></Link>
        </div>
    );
}

export default Header;