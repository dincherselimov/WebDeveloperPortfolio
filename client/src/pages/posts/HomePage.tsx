import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe";
// import HomeSkills from "../components/HomeSkills";
// import HomeProjects from "../components/HomeProjects";
import ContentBox from "../components/ContentBox";


export default function HomePage() {
  const skills = [
    {
      id: 1,
      // img:'',
      img: '',
      name: "HTML",
      description: "Some description about my HTML skills",
    },
    {
      id: 2,
      // img:'',

      img: '',
      name: "CSS3",
      description: "Some description about my CSS skills",
    },
    {
      id: 3,
      // img:'',

      img: '',
      name: "JavaScript",
      description: "Some description about my JS skills",
    },
    {
      id: 4,
      // img:'',

      img: '',
      name: "Next.js",
      description: "Some description about my Next.js skills",
    },
    {
      id: 5,
      // img:'',

      img: '',
      name: "React",
      description: "Some description about my React Skills",
    },
    {
      id: 6,
      // img:'',

      img: '',
      name: "PHP",
      description: "Some description about my PHP skills",
    },
    {
      id: 7,
      // img:'',

      img: '',
      name: "Java OOP",
      description: "Some description about my Java skills",
    },
    {
      id: 8,
      // img:'',

      img: '',
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
