import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../assets/Logo.png';
import './Header.css';

const Nav = styled.nav`
  padding: 0 20px;
  height: 6rem;
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width:100%;
  box-shadow: 0 8px 6px -6px #999;
`;

const Logo = styled.h1`
  display:flex;
  flex-direction:row;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;

  li {
    margin: 0px 15px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const SLink = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: none;
    color: #767676;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  z-index:100;
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100%;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

export default function Header() {
  const [toggle, toggleNav] = useState(false);
  return (
    <div className="header">
      <Nav>

        <Link to="/"><Logo>

          <img className="item left" src={logo} alt="" />
          <div className="item right">
            <h2>TSF GRIP</h2>
            <p style={{ color: '#777' }}>...inspiring, innovating, integrating</p>
          </div>

        </Logo>
        </Link>
        <Menu>

          <Item>
            <Link className="mylink" to='/'>
              <SLink target="#" href="#">
                About Us
              </SLink>
            </Link>
          </Item>
          <Item>
            <Link className="mylink" to='/grip'>
              <SLink target="#" href="#">
                GRIP
            </SLink>
            </Link>
          </Item>
          <Item>
            <Link className="mylink" to='/ourteam'>
              <SLink target="#" href="#">
                Our Team
            </SLink>
            </Link>
          </Item>
          <Item>
            <Link className="mylink" to='/contact'>
              <SLink target="#" href="#">
                Contact Us
            </SLink>
            </Link>
          </Item>

        </Menu>

        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>

      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>

          <Item>
            <Link onClick={() => toggleNav(!toggle)} className="mylink" to='/'>
              <SLink target="#" href="#">
                About Us
              </SLink>
            </Link>
          </Item>
          <Item>
            <Link onClick={() => toggleNav(!toggle)} className="mylink" to='/grip'>
              <SLink target="#" href="#">
                GRIP
            </SLink>
            </Link>
          </Item>
          <Item>
            <Link onClick={() => toggleNav(!toggle)} className="mylink" to='/ourteam'>
              <SLink target="#" href="#">
                Our Team
              </SLink>
            </Link>
          </Item>
          <Item>
            <Link onClick={() => toggleNav(!toggle)} className="mylink" to='/contact'>
              <SLink target="#" href="#">
                Contact Us
              </SLink>
            </Link>
          </Item>

        </OverlayMenu>
      </Overlay>
    </div>
  );
};
