import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../netplix-logo.png'

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10vh;
    background: ${props => props.bg};
    position: fixed;
    top:0;
    z-index: 10;
    padding: 0 15px;
    transition: all 0.2s;

    @media (max-width: 520px){
        &{
            height: 7.5vh;
        }
    }

`;
const Logo = styled.img`
    height: 50px;
    object-fit: contain;

    @media (max-width: 520px){
        &{
            height: 30px;
        }
    }
`;
const Avatar = styled.img`
    height: 30px;
    width: 30px;
    @media (max-width: 520px){
        &{
            height: 20px;
            width: 20px;
        }
    }
`

const Navbar = () => {

    const [yOffset, setYOffset] = useState(0)
    const [innerWidth, setInnerWidth] = useState(0)

    window.addEventListener('scroll', ()=>{
        setYOffset(window.pageYOffset)
        setInnerWidth(window.innerWidth)
    })

    return (
    <Nav bg={(yOffset > ((innerWidth < 400) ? 15 : 50)) ? '#111' : 'transparent'}>
        <Logo src={logo} alt="Netplix Logo" />
        <Avatar src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
    </Nav>
    );
};

export default Navbar;