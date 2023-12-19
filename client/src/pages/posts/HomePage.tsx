import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../../components/HomeIntro";
import HomeAboutMe from "../../components/HomeAboutMe";
import HomeProjects from "../../components/HomeProjects";
import ContentBox from "../../components/ContentBox";
import ProfessionalSkill from "../../components/ProfesionalSkills";
import Motivation from "../../components/Motivation";
import Form from "../../components/Form";
import skills from "@/components/Skills";

export default function HomePage() {
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />;

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
      <ProfessionalSkill />
      <HomeProjects />
      <Form />
      <Motivation />
    </PageLayout>
  );
}
