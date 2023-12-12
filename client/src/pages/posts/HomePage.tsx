import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe";
// import HomeSkills from "../components/HomeSkills";
// import HomeProjects from "../components/HomeProjects";
import ContentBox from "../components/ContentBox";
import { faHtml5, faCss3, faJs, faReact, faPhp, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HomePage() {
  const skills = [
    {
      id: 1,
      img: <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon>,
      name: "HTML",
      description: "Some description about my HTML skills",
    },
    {
      id: 2,
      img: <FontAwesomeIcon icon={faCss3}></FontAwesomeIcon>,
      name: "CSS3",
      description: "Some description about my CSS skills",
    },
    {
      id: 3,
      img: <FontAwesomeIcon icon={faJs}></FontAwesomeIcon>,
      name: "JavaScript",
      description: "Some description about my JS skills",
    },
    {
      id: 4,
      img: <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>,
      name: "Next.js",
      description: "Some description about my Next.js skills",
    },
    {
      id: 5,
      img: <FontAwesomeIcon icon={faReact}></FontAwesomeIcon>,
      name: "React",
      description: "Some description about my React Skills",
    },
    {
      id: 6,
      img: <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon>,
      name: "PHP",
      description: "Some description about my PHP skills",
    },
    {
      id: 7,
      img: <FontAwesomeIcon icon={faJava}></FontAwesomeIcon>,
      name: "Java OOP",
      description: "Some description about my Java skills",
    },
    {
      id: 8,
      img: <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>,
      name: "Version Control",
      description: "Some description about my Version Control Skills",
    },
    
  ];

  const contBox = skills.map((item) => (
    <ContentBox
      key={item.id}
      img={item.img}
      name={item.name}
      description={item.description}
    />
  ));

  return (
    <PageLayout>
      <IntroSection />
      <HomeAboutMe />
      <section className="personal_skills_section">
        <h2 className="personal_title">My Personal skills</h2>
        <div className="content-main">{contBox}</div>
      </section>

      {/* <HomeSkills/> */}
      {/* <HomeProjects/> */}
    </PageLayout>
  );
}
