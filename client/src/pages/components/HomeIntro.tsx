import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function IntroSection() {
  const [text, setText] = useState("");

  const [fullText, setFullText] = useState(
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
                  <a href="#" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target="_blank" href="https://twitter.com/DincherSel32807">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a target="_blank" href="https://github.com/dincherselimov">
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/dincher-selimov-6b069b209/"
                  >
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
              src="/me.jpg"
              width={400}
              height={400}
              alt="me"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
