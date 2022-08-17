import './App.css';
import Nav from './Components/Header';
import TabSelectorEducation from './Components/TabSelector_Education';
import TabSelectorCareer from './Components/TabSelector_Career';

import resume from './Robert_Mayfield_Resume_2.PDF';
import TabsProjects from './Components/Tabs_Projects';
import Featured from './Components/Featured';
import About from './Components/About';

function App() {
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  window.addEventListener('scroll', reveal);

  return (
    <>
      <Nav />
      <main>
        <section id="home">
          <p className="text-base text-white">Hi, my name is</p>
          <h1 className="text-primaryc">Robert Mayfield.</h1>
          <h1 className="text-secondaryc">
            I'm a Full Stack Blockchain Developer.
          </h1>
          <p className="text-base text-white max-w-4xl">
            I'm a professional and software engineer with a passion for
            blockchain, cryptocurrency, NFT, and decentralized technologies.
            Scroll below to read more about my experience and career.
          </p>
          &nbsp;
          <button className="text-primaryc mt-5">
            <a href="#about">About Me</a>
          </button>
        </section>
        <section id="about" className="reveal">
          <About />
        </section>

        <section id="career" className="reveal">
          <h2>My Career</h2>
          <hr className="text-secondaryc mb-5 max-w-2xl"></hr>
          <TabSelectorCareer />

          <button className="mt-8">
            <a href={resume} download="RobertMayfield_Resume">
              Resume
            </a>
          </button>
        </section>
        <section id="education" className="reveal">
          <TabSelectorEducation />
        </section>
        <section id="projects" className="text-white reveal">
          <Featured />
        </section>
        <section id="proj_other" className="reveal">
          <h2 className="text-center">Other Projects</h2>
          <TabsProjects />
        </section>
        <section id="contact" className="text-white reveal">
          <div className="flex flex-col justify-center items-center gap-5">
            <h2>Get In Touch</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <button>
              <a href="mailto:bjm2020@gmail.com">Contact Me</a>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
