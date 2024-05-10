import React from "react";
import Typewriter from "typewriter-effect";
import { personalDetails, socialMediaUrl } from "../../Detail.jsx";
import About from './About.jsx'
import Projects from './Projects.jsx'
import Technologies from './Technologies.jsx'
import Contact from './ContactMe.jsx'

function Home() {
  const { name, tagline, img } = personalDetails;
  const { linkdein, github, twitter } = socialMediaUrl;

  return (
    <>
      <main className="container mx-auto max-width section md:flex justify-between items-center">
        <div>
          <h1
            className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hey ,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
            {/* Use Typewriter component for the tagline */}
            <Typewriter
              options={{
                strings: [tagline], // Specify your tagline here
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5 p-9">
            {/* Social media links */}
          </div>
        </div>
        <div className="mt-5 md:mt-0">
  <img className="w-1/2 md:ml-auto filter drop-shadow-lg" src={img} alt="Tejas Kamble" />
</div>


      </main>
      <br />
      <br/>
      {/* Other sections */}
      <About />
      <br />
      <Technologies />
      <br />
      <Projects />
      <br />
      <Contact />
    </>
  );
}

export default Home;
