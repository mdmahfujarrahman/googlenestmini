import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar container mx-auto mt-6">
            <div className="navbar-center lg:navbar-start">
                <div className="dropdown hidden">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <p>Item 1</p>
                        </li>
                        <li tabIndex="0">
                            <p className="justify-between">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </p>
                        </li>
                        <li>
                            <p>Item 3</p>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="text-primary normal-case text-4xl">
                    Nest Mini
                </Link>
            </div>
            <div className="navbar-end">
                <div className="text-primary mr-2 text-xl hidden lg:block">
                    <span>$29.99</span>
                    <span className="line-through ml-6">$49</span>
                    <p>Free shipping</p>
                </div>
                <button className="buy-button hidden lg:block">Buy</button>
            </div>
        </div>
    );
};

export default Navbar;