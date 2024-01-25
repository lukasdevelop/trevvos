import { useState } from "react";
import { HeaderContainer, MenuIcon, Nav } from "./styles";
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <HeaderContainer>
                <img src={logo} />
                <MenuIcon onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </MenuIcon>
            </HeaderContainer>
            <Nav open={menuOpen}>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/about">SOBRE NÓS</NavLink></li>
                    <li><NavLink to="/contact">ENTRE EM CONTATO</NavLink></li>
                </ul>
            </Nav>
        </>
    )
}