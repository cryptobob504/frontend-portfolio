import './App.css';
import Nav from './Components/Header';
import React from 'react';
import TabSelectorEducation from './Components/TabSelector_Education';
import TabSelectorCareer from './Components/TabSelector_Career';
import { educationData, careerData } from './Utils/data';
import CardGrid from './Components/CardGrid';
import pfp from './bob.jpg';

function App() {
  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <p className="text-base text-white">Hi, my name is</p>
          <h1 className="text-primaryc">Robert Mayfield.</h1>
          <h1 className="text-secondaryc">I build things for the web.</h1>
          <p className="text-base text-white max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          &nbsp;
          <button className="text-primaryc mt-5">View My Resume</button>
        </section>
        <section id="about">
          <div className="flex flex-row justify-around">
            <div className="flex flex-col gap-5">
              <h2>About Me</h2>
              <div className="max-w-2xl">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur
                </p>
                <p className="text-white">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="flex flex-col gap-20">
                <div className="flex flex-row gap-20">
                  <ul className="list-disc marker:text-secondaryc text-white">
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                  <ul className="list-disc marker:text-secondaryc text-white">
                    <li>Express.js</li>
                    <li>Solidity</li>
                    <li>MongoDB</li>
                  </ul>
                  <ul className="list-disc marker:text-secondaryc text-white">
                    <li>Leadership</li>
                    <li>Strategic Planning</li>
                    <li>Communication</li>
                  </ul>
                  <ul className="list-disc marker:text-secondaryc text-white">
                    <li>Budgeting</li>
                    <li>Entrepreneurship</li>
                  </ul>
                </div>
              </div>
            </div>
            <img
              className="self-center p-1 border bg-bgcolor border-secondaryc rounded max-w-full"
              width="300"
              height="200"
              src={pfp}
              alt="robert"
            />
          </div>
        </section>

        <section id="career">
          <h2>My Career</h2>
          <hr className="text-secondaryc mb-5 max-w-2xl"></hr>
          <TabSelectorCareer info={careerData} />
        </section>
        <section id="education">
          <TabSelectorEducation info={educationData} />
        </section>
        <section id="projects" className="text-white">
          <h2 className="mb-10">Featured Projects</h2>
          <div className="flex flex-row justify-around text-white">
            <div>
              <img src="https://via.placeholder.com/350x150" alt="Bobby" />
            </div>
            <div className="text-white flex flex-col items-end">
              <h2>My Project</h2>
              <div className="text-secondaryc border border-solid bg-dark border-secondaryc max-w-md">
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
          <h2>Other Projects</h2>
          <CardGrid />
        </section>
        <section id="contact" className="text-white">
          <div className="flex flex-col justify-center items-center gap-5">
            <h2>Get In Touch</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button>Contact Me</button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
