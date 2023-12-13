import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe";
import HomeProjects from "../components/HomeProjects";
import ContentBox from "../components/ContentBox";
import ProfessionalSkill from "../components/ProfesionalSkills";
import Motivation from "../components/Motivation";

export default function HomePage() {
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />;
  const skills = [
    {
      id: 1,
      img: <i className="fab fa-html5"></i>,
      name: "HTML",
      description: "Some description about my HTML skills",
    },
    {
      id: 2,
      img: <i className="fab fa-css3"></i>,
      name: "CSS3",
      description: "Some description about my CSS skills",
    },
    {
      id: 3,
      img: <i className="fab fa-js"></i>,
      name: "JavaScript",
      description: "Some description about my JS skills",
    },
    {
      id: 4,
      img: <i className="fab fa-react"></i>,
      name: "Next.js",
      description: "Some description about my Next.js skills",
    },
    {
      id: 5,
      img: <i className="fab fa-react"></i>,
      name: "React",
      description: "Some description about my React Skills",
    },
    {
      id: 6,
      img: <i className="fab fa-php"></i>,
      name: "PHP",
      description: "Some description about my PHP skills",
    },
    {
      id: 7,
      img: <i className="fab fa-java"></i>,
      name: "Java OOP",
      description: "Some description about my Java skills",
    },
    {
      id: 8,
      img: <i className="fab fa-github"></i>,
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
      <ProfessionalSkill/>
      <HomeProjects/>
      <Motivation/>
    </PageLayout>
  );
}
