import React from 'react'
import { Dropdown, Navbar } from 'flowbite-react';
import { Avatar } from 'flowbite-react';
import { DropdownItem } from 'flowbite-react/lib/esm/components/Dropdown/DropdownItem';
import pro from '../../images/pro3.png'
import { Route, Routes } from 'react-router';

import { Link } from 'react-router-dom'
function Header() {
    return (
        <div class='fixed w-full z-20'>

        
            <Navbar 
                fluid
                rounded className=' bg-gray-800   rounded-none'
            >
                <Navbar.Brand onClick={() => {
        window.location.href = "/";
    }}>
                    <img
                        alt=""
                        className="mr-3 h-6 sm:h-9"
                        src="/favicon.svg" />        
                    <h1 class="flex items-center text-2xl font- font-bold text-gray-200"> Nutri Spectrum</h1>
                </Navbar.Brand>

                {window.sessionStorage.getItem('email') === null ?
(<div className="flex md:order-2 ">
<Dropdown
    inline
    label={<Avatar className='' alt="User settings" img={pro} rounded />}
>
    <DropdownItem onClick={() => {
        window.location.href = "SignIn";
    }}>
        Sign In
    </DropdownItem>
    
</Dropdown>
<Navbar.Toggle />
</div>)
                : (<div className="flex md:order-2 ">
                    <Dropdown
                        inline
                        label={<Avatar className='' alt="User settings" img={pro} rounded />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {window.sessionStorage.getItem('name')}
                            </span>
                            <span className="block truncate text-sm font-medium">
                            {window.sessionStorage.getItem('email')}
                            </span>
                        </Dropdown.Header>
                        <DropdownItem onClick={() => {
                            window.location.href = "/User/Dashboard";
                        }}>
                            Dashboard
                        </DropdownItem>
                        <DropdownItem onClick={() => {
                            // <Link to="/User/Profile"/>
                            window.location.href = "/User/Profile";
                        }}>
                            Profile
                        </DropdownItem>
                        <Dropdown.Divider />
                        <DropdownItem onClick={ () => {
                            window.location.href="/"
                            window.sessionStorage.clear();
                        }}>
                            Sign out
                        </DropdownItem>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>)}
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="/" 
                    >
                        <p className=' text-gray-200'>
                            Home
                        </p>
                       
                    </Navbar.Link>
                    <Navbar.Link href="/#About">
                    <p className='text-gray-200'> About</p>
                    </Navbar.Link>
                    <Navbar.Link href="/#Services">
                    <p className='text-gray-200'> Services</p>
                    </Navbar.Link>
                    <Navbar.Link href="/#Policies">
                    <p className='text-gray-200'> Policies</p>
                    </Navbar.Link>
                    <Navbar.Link href="/#News">
                    <p className='text-gray-200'> News</p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </div>
    );
}

export default Header