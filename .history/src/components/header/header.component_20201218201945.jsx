import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <Link classto='/'>
                <Logo className='logo' />
            </Link>
        </div>
    );
}

export default Header;