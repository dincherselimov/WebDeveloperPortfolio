import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe";
import HomeSkills from "../components/HomeSkills";
import HomeProjects from "../components/HomeProjects";
import CardData from "../components/CardData";
import ContentBox from "../components/ContentBox";



export default function HomePage(){

    const contBox = CardData.map((item) => {
        return <ContentBox img={item.img} name={item.name} description={item.description}/>
    })
      
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