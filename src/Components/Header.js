import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
    return (
        <div className='header' >
            <Navbar className='nav' bg="primary" variant="dark">
                <img className="logo"
                    alt="logo"
                    src="https://png.pngtree.com/png-clipart/20220719/original/pngtree-illustration-of-male-chef-png-image_8364030.png"
                    width="30"
                    height="30"

                />{' '}
                <Container>
                    <Navbar.Brand href="/">
                        &emsp;&nbsp; Find Restaurant
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header