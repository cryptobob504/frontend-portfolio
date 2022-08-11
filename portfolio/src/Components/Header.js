import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="top-0 w-full text-white">
      <div
        id="nav-bg"
        className="w-full bg-transparent flex justify-between flex-row p-5"
      >
        <div>
          <img className="h-10 w-10" src={logo} alt="Logo"></img>
        </div>
        <nav>
          <ul className="flex flex-row gap-6">
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">WORK</a>
            </li>
            <li>
              <a href="#">EDUCATION</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <AiFillGithub size="1.5em" />
            </li>
            <li>
              <AiFillLinkedin size="1.5em" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
