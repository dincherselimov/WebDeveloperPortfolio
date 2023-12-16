import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import socialLinks from "./SocialLinks";

export default function IntroSection() {
  const { facebook, twitter, instagram, github, linkedin } = socialLinks;

  const [text, setText] = useState("");

  const [fullText] = useState(
    "I am Dincher Selimov and I specialize in web development."
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 60);
    }
  }, [index, fullText, text]);

  return (
    <section className="welcomeSection">
      <div className="container">
        <div className="content">
          <div className="about_me">
            <h1>
              Welcome, 
              <br />
              {text} 
            </h1>
            <div className="social-icons">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              />
              <div className="hero">
                <div className="social-links">
                  <a href={facebook} target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={instagram} target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={twitter} target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={github} target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={linkedin} target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dinko">
            {/* <img className="me" src="me.jpg" alt="" /> */}
            <Image
              className="me"
              src="/me-removed-bg.png"
              width={500}
              height={500}
              alt="me"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
