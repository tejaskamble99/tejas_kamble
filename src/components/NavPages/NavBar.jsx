// Import the useState and NavLink hooks
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse , faAddressCard, faMicrochip, faBarsProgress , faAddressBook} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle the resume download
  const handleResumeDownload = () => {
    // Replace 'resumeUrl' with the direct download link to your resume
    const resumeUrl = 'https://drive.google.com/file/d/1Wd2Dqw6Nvgntijq9ZX_FiBzLRWaWNg6_/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <div className="flex justify-between items-center py-2 md:py-10">
        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading dark:stroke-white md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              <FontAwesomeIcon icon={faHouse} />  Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/about" onClick={toggleClass}>
              <FontAwesomeIcon icon={faAddressCard} />   About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/technologies" onClick={toggleClass}>
              <FontAwesomeIcon icon={faMicrochip} />  Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/project" onClick={toggleClass}>
              <FontAwesomeIcon icon={faBarsProgress} />  Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleClass}>
              <FontAwesomeIcon icon={faAddressBook} /> Contact
            </NavLink>
          </li>
          <li>
            {/* Call the handleResumeDownload function when the button is clicked */}
            <button onClick={handleResumeDownload} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
