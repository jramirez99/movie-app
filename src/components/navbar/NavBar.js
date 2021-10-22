import React from 'react';
import { Link } from 'react-router-dom';

import { Bar, NavBarContainer } from '../../styles/components/navbar/navBarStyled';
import { Nav } from './Nav';

import logo from '../../images/logo.svg';

export const NavBar = () => {
    return (
        <Bar>
            <NavBarContainer className="container">
                <Link to="/">
                    <img 
                        src={ logo }
                        alt="logo"
                    />
                </Link>

                <Nav />
            </NavBarContainer>
        </Bar>
    );
};
