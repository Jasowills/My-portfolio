import React from "react";
import { IoBookOutline, IoDownloadOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";


const Resume = ({ active }) => {
  return (
    <article className={`resume ${active ? "active" : ""}`} data-page="Resume">
      <header className="flex">
        <h2 className="h2 article-title">Resume</h2> &nbsp;&nbsp;&nbsp;
        <a
    download="document_name.pdf"
    target="_blank"
    href="https://docs.google.com/document/d/1mG4VK4aWVfwfT3rkc6cT4VVvudSlzKNf/export?format=pdf"
    className="icon-box my-2 sm:my-3 mx-3 h-7 w-7 cursor-pointer"
>
    <IoDownloadOutline className="invert h-5 w-5" />
</a>

      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Bitcoin/Lightning Network Engineer
            </h4>
            <div className="flex item-center">
              <a className="h4" href="https://settyl.com/">
                Btrust Builders | &nbsp;
              </a>
              <span className="mx-2 my-1 text-sm">Jan 2022 - Present </span>
            </div>
            <p className="timeline-text">
              Contributed to the open-source development of Lightning Network
              software, collaborating with the community to identify and address
              bugs and vulnerabilities..
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Infrastructure Engineer</h4>
            <div className="flex item-center">
              <a className="h4" href="#">
                Bitnob Technologies | &nbsp;
              </a>
              <span className="mx-2 my-1 text-sm">May 2021 - Present </span>
            </div>
            <p className="timeline-text">
              Led a development team that migrated a company workload to the
              cloud with zero downtime, resulting in increased scalability and
              cost savings.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer</h4>
            <div className="flex item-center">
              <a className="h4" href="https://settyl.com/">
                Penciledge LLC. | &nbsp;
              </a>
              <span className="mx-2 my-1 text-sm">
                October 2019 - September 2020
              </span>
            </div>
            <p className="timeline-text">
              Conducted performance testing and optimization of application and
              database layers.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer</h4>
            <div className="flex item-center">
              <a className="h4" href="https://settyl.com/">
                Andela. | &nbsp;
              </a>
              <span className="mx-2 my-1 text-sm">
                May 2019 - September 2019
              </span>
            </div>
            <p className="timeline-text">
              Developed and maintained scripts in Golang, Python, and Typescript
              for automation of deployment, monitoring, and incident response
            </p>
          </li>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Yaba College of Technology
            </h4>
            <span>2016 - 2019</span>
            <p className="timeline-text">
              Diploma in Electrical and Electronics Engineering
            </p>
          </li>
        </ol>
      </section>
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Languages</h5>
            </div>
            <div className="flex">
              <div className="icon-box">
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                    alt="typescript"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
                    alt="javascript"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://www.w3schools.com/cpp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000"
                    alt="c++"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://go.dev/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                    alt="c"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://www.rust-lang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=XWesbnSd4AUa&format=png&color=000000"
                    alt="c"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://www.ruby-lang.org/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/go/go-original.svg"
                    alt="c"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Cloud Computing</h5>
            </div>
            <div className="flex">
              <div className="icon-box">
                <a
                  href="https://portal.azure.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=VLKafOkk3sBX&format=png&color=000000"
                    alt="react"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://ionicframework.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=33039&format=png&color=#C5CAD2"
                    alt="ionic"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=20774&format=png&color=000000"
                    alt="html5"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Backend</h5>
            </div>
            <div className="flex">
              <div className="icon-box">
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLA972a1NXwGHTIpgjxpRdu1DD5te1evggDgjNvM_FcbtGxaPYrHbV27RNzJSA_ZhrY28&usqp=CAU"
                    alt="express"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                    alt="nodejs"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000"
                    alt="nodejs"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://socket.io" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
                    alt="socket.io"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Automation and configuration management </h5>
            </div>
            <div className="flex">
              <div className="icon-box">
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=iGCCE2iEmh2u&format=png&color=000000"
                    alt="express"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=ruy9ysFH4cmE&format=png&color=000000"
                    alt="nodejs"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=8gWOBXY72Osj&format=png&color=000000"
                    alt="nodejs"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Database</h5>
            </div>
            <div className="flex">
              <div className="icon-box">
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
                    alt="mongodb"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000"
                    alt="postgresql"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              <div className="icon-box">
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=11572&format=png&color=000000"
                    alt="postgresql"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
            </div>
          </li>
          <li className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">Tools</h5>
            </div>
            <div className="flex">
              <div className="icon-box">
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000"
                    alt="git"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              <div className="icon-box">
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img
                    src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
                    alt="git"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
              &nbsp;
              
              <div className="icon-box">
                <a href="https://postman.com" target="_blank" rel="noreferrer">
                  <img
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="postman"
                    width="35"
                    height="35"
                    className="rounded-md"
                  />
                </a>
              </div>
            </div>
          </li>
        </ul>

      </section>
    </article>
  );
};

export default Resume;
