import React from 'react';
import { IoConstructOutline, IoCodeOutline, IoPhonePortraitOutline, IoDocumentTextOutline, IoCloseOutline, IoSettings, IoSettingsOutline, IoServerOutline } from 'react-icons/io5';

const About = ({ active }) => {
  return (
    <article  className={`about ${active ? 'active' : ''}`} data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
           I'm Nonso, Infrastructure Engineer with 4 years of experience in designing, implementing and maintaining large-scale, distributed systems for mission-critical applications. 
        </p>
        <p>
        Experienced in cloud migration and optimization, system monitoring and alerting,
         and kubernetes provisioning. Proficient in Golang, Python, and Typescript, with
          knowledge of software development methodologies such as Agile and Scrum. AWS Certified
           Cloud Solutions Architect with demonstrated knowledge of cloud infrastructure and services.

        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
            <IoConstructOutline style={{ color: 'hsl(123, 100%, 72%)', fontSize: '24px' }}  />
            </div>
            <div className="service-content-box">
            <h4 className="h4 service-item-title">DevOps Engineering</h4>
          <p className="service-item-text">Implementing and maintaining CI/CD pipelines.</p>

            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
            <IoCodeOutline style={{ color: 'hsl(123, 100%, 72%)', fontSize: '24px' }} />
             </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend development</h4>
              <p className="service-item-text">Backend server development of websites.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
            <IoSettingsOutline style={{ color: 'hsl(123, 100%, 72%)', fontSize: '24px' }} />
             </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">System Administration</h4>
              <p className="service-item-text">Create and manage user accounts, permissions, and groups.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
            <IoServerOutline style={{ color: 'hsl(123, 100%, 72%)', fontSize: '24px' }} />
             </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Server Management</h4>
              <p className="service-item-text">Setting up and configuring Linux servers for various applications and services.</p>
            </div>
          </li>
        </ul>
      </section>

   

     
    </article>
  );
};

export default About;
