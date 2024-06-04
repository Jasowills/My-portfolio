import React, { useEffect } from 'react';
import { IoLogoLinkedin, IoLogoTwitter, IoLogoGithub, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoChevronDown } from 'react-icons/io5';
import image from "../assets/pic.jpg"
const Sidebar = () => {

    useEffect(() => {
        // Sidebar toggle functionality
        const sidebarBtn = document.querySelector("[data-sidebar-btn]");
        const sidebar = document.querySelector("[data-sidebar]");
    
        const elementToggleFunc = function (elem) {
          elem.classList.toggle("active");
        };
    
        sidebarBtn.addEventListener("click", function () {
          elementToggleFunc(sidebar);
        });
    
        // Cleanup function to remove event listener
        return () => {
          sidebarBtn.removeEventListener("click", elementToggleFunc);
        };
      }, []); // Empty dependency array means this effect runs only once after initial render
    
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={image} className="rounded-xl" alt="Nonso Amadi" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Nonso Amadi">Chinonso Amadi</h1>
          <div className="flex items-center">
            <p className="title">DevOps Engineer</p>
          </div>
   <br />
          <ul className="social-list py-4">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/justice-amadi" target="_blank" rel="noopener noreferrer" className="social-link">
                <IoLogoLinkedin />
              </a>
            </li>
            <li className="social-item">
              <a href="https://x.com/jackhoudini__" target="_blank" rel="noopener noreferrer" className="social-link">
                <IoLogoTwitter />
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/NonsoAmadi10" target="_blank" rel="noopener noreferrer" className="social-link">
                <IoLogoGithub />
              </a>
            </li>
          </ul>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="" className="contact-link">nonsoamadi@aol.com</a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Nigeria</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
