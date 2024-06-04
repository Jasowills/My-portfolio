import React, { useEffect, useRef, useState } from 'react';
import { IoConstructOutline, IoGitBranchOutline, IoLogoGithub } from 'react-icons/io5';

const Projects = ({ active }) => {
  const [filter, setFilter] = useState('all');
  const [activeButton, setActiveButton] = useState('All');
  const selectRef = useRef(null);
  const selectValueRef = useRef(null);
  const filterItemsRef = useRef([]);

  useEffect(() => {
    const elementToggleFunc = (elem) => {
      elem.classList.toggle('active');
    };

    const handleSelectClick = () => {
      elementToggleFunc(selectRef.current);
    };

    const handleSelectItemClick = (selectedValue) => {
      selectValueRef.current.innerText = selectedValue;
      setFilter(selectedValue.toLowerCase());
      elementToggleFunc(selectRef.current);
    };

    const handleFilterBtnClick = (selectedValue) => {
      setFilter(selectedValue.toLowerCase());
      setActiveButton(selectedValue);
    };

    // Attach event listeners to select box
    selectRef.current.addEventListener('click', handleSelectClick);

    // Cleanup event listeners on unmount
    return () => {
      selectRef.current.removeEventListener('click', handleSelectClick);
    };
  }, []);

  useEffect(() => {
    const filterFunc = () => {
      filterItemsRef.current.forEach((item) => {
        if (filter === 'all') {
          item.classList.add('active');
        } else if (filter === item.dataset.category) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    };

    filterFunc();
  }, [filter]);

  return (
    <article className={`page ${active ? 'active' : ''}`} data-page="Projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        

        <div className="filter-select-box">
          <button className="filter-select" data-select ref={selectRef}>
            <div className="select-value" data-select-value ref={selectValueRef}>
              Select category
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          
        </div>

        <ul className="service-list">
          {[
            {
              title: 'Abobi',
              category: '',
              description: 'A go command line tool that parses your environment variables written in a file into a kubernetes base64 encoded secrets',
              link: 'https://github.com/NonsoAmadi10/abobi',
            },
            {
              title: 'Mempool-fee-analysis',
              category: '',
              description: 'An API and cli that helps users decide what amount of fee to pay for bitcoin transaction based on mempool analysis',
              link: 'https://github.com/NonsoAmadi10/mempool-fee-analysis',
            },
            {
              title: 'Heimdal',
              description: 'Heimdall is a monitoring tool designed to help Bitcoin/Lightning node operators keep their nodes up and running by providing real-time information on the performance and availability of their nodes.',
              link: 'https://github.com/NonsoAmadi10/Heimdall',
            },
            {
              title: 'Stratum',
              category: '',
              description: 'SRI is a reference implementation of the Stratum V2 protocol written in Rust 🦀.',
              link: 'https://github.com/NonsoAmadi10/stratum',
            },
          ].map((project, index) => (
            <li
              key={index}
              className="service-item"
              data-filter-item
              data-category={project.category}
              ref={(el) => (filterItemsRef.current[index] = el)} > 
              <div className="service-icon-box">
            <IoLogoGithub style={{ color: 'hsl(123, 100%, 72%)', fontSize: '24px' }}  />
            </div>
              <div className="service-content-box">
              
                <h3 className="service-item-title h4">{project.title}</h3>
                <p className="service-item-text">{project.description}</p>
                <br />
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <ul className="filter-list">
           <a href="https://github.com/NonsoAmadi10">
            <li  className="filter-item">
             View More
            </li></a> 
        </ul>
      </section>
    </article>
  );
};

export default Projects;
