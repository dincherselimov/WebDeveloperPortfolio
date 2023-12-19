import React from "react-dom";
import Image from "next/image";
import PageContent from "../content/PageContent.json";

export default function HomeProjects() {
  const projects = PageContent.Projects;
  return (
    <section className="projects" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <div className="carousel owl-carousel">
          <div className="card2">
            <div className="box">
              {/* <img src="dcat.jpg" alt=""></img> */}
              <Image src="/dcat.jpg" width={400} height={400} alt="dcat" />
              <div className="text">DCAT-AP</div>
              <p className="mini-title">
                #Project Details:<br></br>
              </p>
              <p className="projects-p">{projects.DCATAP}</p>
            </div>
          </div>
          <div className="card2">
            <div className="box">
              {/* <img src="portfolio.jpeg" alt=""></img> */}
              <Image
                src="/portfolio.jpeg"
                width={400}
                height={400}
                alt="portfolio"
              />
              <div className="text">Portfolio</div>
              <p className="mini-title">
                #Project Details:<br></br>
              </p>
              <p className="projects-p">{projects.Portfolio}</p>
            </div>
          </div>
          <div className="card2">
            <div className="box">
              {/* <img src="trading.jpg" alt=""></img> */}
              <Image src="/trading.jpg" width={400} height={400} alt="me" />
              <div className="text">Newsletter and Trading Platform</div>
              <p className="mini-title">#Project Details:</p>
              <p className="projects-p">
                {projects.NewsletterAndTradingPlatform}
              </p>
            </div>
          </div>
          <div className="card2">
            <div className="box">
              <Image
                className="magento-img"
                src="/magento.png"
                width={400}
                height={400}
                alt="magento"
              />
              <div className="text">PHP Developer (initOS GmbH)</div>
              <p className="mini-title">#Project Details:</p>
              <p className="projects-p">{projects.Magento}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
