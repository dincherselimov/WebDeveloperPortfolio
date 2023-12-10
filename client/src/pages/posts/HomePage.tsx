import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe";
import HomeSkills from "../components/HomeSkills";
import HomeProjects from "../components/HomeProjects";
import ContentBox from "../components/ContentBox";



export default function HomePage(){

    const skills = [
        {
          id: 1,
          img: "112",
          name: "HTML",
          description: "Some description about my HTML skills",
        },
        {
          id: 2,
          img: "",
          name: "CSS3",
          description: "Some description about my CSS skills",
        },
        {
          id: 3,
          img: "",
          name: "JavaScript",
          description: "Some description about my JS skills",
        },
        {
          id: 4,
          img: "",
          name: "Next.js",
          description: "Some description about my Next.js skills",
        },
        {
          id: 5,
          img: "",
          name: "React",
          description: "Some description about my React Skills",
        },
        {
          id: 6,
          img: "",
          name: "PHP",
          description: "Some description about my PHP skills",
        },
        {
          id: 7,
          img: "",
          name: "Java OOP",
          description: "Some description about my Java skills",
        },
        {
          id: 8,
          img: "me.jpg",
          name: "Version Control",
          description: "Some description about my Version Control Skills",
        },
        {
          id: 9,
          img: "me.jpg",
          name: "Version Control",
          description: "Some description about my Version Control Skills",
        },
      ];
            
    const contBox = skills.map((item) => (
        <ContentBox key={item.id} img={item.img} name={item.name} description={item.description} />
      ));
      
    return (
        <PageLayout>
          <IntroSection/>
          <HomeAboutMe/>
          <div>{contBox}</div>
          {/* <HomeSkills/> */}
          {/* <HomeProjects/> */}
      </PageLayout>
      );
}