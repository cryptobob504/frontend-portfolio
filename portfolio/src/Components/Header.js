import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import logo from '../RMLOgo.svg';
import resume from '../Robert_Mayfield_Resume_2.PDF';

export default function Header() {
  return (
    <header className="top-0 w-full text-white">
      <div
        id="nav-bg"
        className="w-full bg-transparent flex justify-between flex-row p-5"
      >
        <div className="flex flex-row gap-3 justify-center items-center">
          <img className="h-17 w-17 ml-10" src={logo} alt="Logo"></img>
          <p className="text-primaryc text-xl">
            <strong>RM</strong>
          </p>
        </div>
        <nav>
          <ul className="flex flex-row gap-6">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#career">WORK</a>
            </li>
            <li>
              <a href="#education">EDUCATION</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <a href="https://github.com/cryptobob504">
                <AiFillGithub size="1.5em" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/robert--mayfield/">
                <AiFillLinkedin size="1.5em" />
              </a>
            </li>
            <li>
              <button>
                <a href={resume} download="RobertMayfield_Resume">
                  Resume
                </a>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
