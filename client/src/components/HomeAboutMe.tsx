import React from "react";
import Image from "next/image";
import DownloadButton from "./DowloadCV";
import PageContent from "../content/PageContent.json";

export default function HomeAboutMe() {
  const aboutMe = PageContent.aboutMe;

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">{aboutMe.title}</h2>
        <div className="about-content">
          <div className="image-about column left">
            <Image src={"/ai.jpg"} width={300} height={200} alt={""} />
          </div>
          <div className="column right">
            <div className="text">
              {aboutMe.whoIAm}
              <span className="typing-2"></span>
            </div>
            <p>{aboutMe.description_one}</p>
            <br></br>
            <div className="text">{aboutMe.WhyWorkWithMe}</div>
            <p>{aboutMe.description_two}</p>
            <a target="blank">
              <DownloadButton />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
