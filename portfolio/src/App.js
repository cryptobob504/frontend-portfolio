import './App.css';
import Nav from './Components/Header';
import React from 'react';

function App() {
  return (
    <>
      <Nav />
      <section id="home">
        <p className="text-base text-white">Hi, my name is</p>
        <p className="text-xl text-primaryc">Robert Mayfield.</p>
        <p className="text-xl text-secondaryc">I build things for the web.</p>
        <p className="text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section id="about">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <h1 className="text-primaryc">About Me</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
            <p className="text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex flex-row gap-20">
              <ul className="text-white">
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
              </ul>
              <ul className="text-white">
                <li>Express</li>
                <li>Solidity</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <img src="https://via.placeholder.com/150" alt="robert" />
        </div>
      </section>
      <section id="career">
        <h1 className="text-white">My Career</h1>
        <div className="flex flex-row gap-20">
          <ul className="flex flex-col text-white gap-8">
            <li>President/CEO</li>
            <li>Owner/Operator</li>
            <li>Operation's Manager</li>
            <li>IT Manager</li>
            <li>Member Service Rep</li>
            <li>Temp Office Assistant</li>
          </ul>
          <div className="text-white">
            <h1>President/CEO - Fleur De Lis Federal Credit Union</h1>
            <p>May 2016 - Present</p>
            &nbsp;
            <ul className="gap-10">
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="education">
        <h1 className="text-white">Education</h1>
        <div className="flex flex-row gap-20">
          <ul className="flex flex-col text-white gap-8">
            <li>University Of New Orleans</li>
            <li>Udacity Nanodegree</li>
            <li>CUNA Management School</li>
            <li>Udacity Nanodegree</li>
          </ul>
          <div className="text-white">
            <h1>University Of New Orleans</h1>
            <p>May 2016 - Present</p>
            &nbsp;
            <ul>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className="text-white">
        <h1>Featured Projects</h1>
        <div className="flex flex-row text-white">
          <div>
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="text-white flex flex-col justify-end">
            <p>Featured Project</p>
            <h2>My Project</h2>
            <div className="text-white border border-solid border-secondaryc">
              <p>
                A minimal, dark blue theme A minimal, dark blue theme for VS
                Code, Sublime Text, Atom, iTerm, and more. Available on Visual
                Studio Marketplace, Package Control, Atom Package Manager, and
                npm.
              </p>
            </div>
            <ul className="flex flex-row gap-5 justify-end">
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Atom</li>
              <li>Test</li>
              <li>Hyper</li>
            </ul>
            <ul className="flex flex-row gap-5 justify-end">
              <li>Github Link</li>
              <li>Project Link</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="proj_other">
        <h1>Other Projects</h1>
      </section>
      <section id="contact" className="text-white">
        <h1>Get In Touch</h1>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <button>Contact Me</button>
      </section>
    </>
  );
}

export default App;
