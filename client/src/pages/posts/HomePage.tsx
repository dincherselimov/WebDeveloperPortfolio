import React from "react";
import PageLayout from "./Layout";
import IntroSection from "../components/HomeIntro";
import HomeAboutMe from "../components/HomeAboutMe";
import HomeSkills from "../components/HomeSkills";
import HomeProjects from "../components/HomeProjects";



export default function HomePage(){
    return (
        <PageLayout>
          <IntroSection/>
          {/* <HomeAboutMe/>
          <HomeSkills/>
          <HomeProjects/> */}
      </PageLayout>

      );
}