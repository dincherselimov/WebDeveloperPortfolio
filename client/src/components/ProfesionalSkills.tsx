import React from "react";
import { useEffect } from "react";
import PageContent from "../content/PageContent.json";

const ProfessionalSkill = () => {
  const profSkills = PageContent.ProfSkills;
  useEffect(() => {
    const leftLiItems = document.querySelectorAll<HTMLLIElement>(".left-li");
    const rightLiItems = document.querySelectorAll<HTMLLIElement>(".right-li");

    window.addEventListener("scroll", () => {
      animateOnScroll(leftLiItems, "left-li-animation");
      animateOnScroll(rightLiItems, "right-li-animation");
    });

    return () => {
      window.removeEventListener("scroll", () => {
        animateOnScroll(leftLiItems, "left-li-animation");
        animateOnScroll(rightLiItems, "right-li-animation");
      });
    };
  }, []);

  const animateOnScroll = (
    items: NodeListOf<HTMLLIElement>,
    animationClass: string
  ) => {
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 10) {
        item.classList.add(animationClass);
      }
    });
  };

  return (
    <section className="skill-section">
      <div className="prof-title-div">
        <h2 className="prof-title">{profSkills.title}</h2>
      </div>

      <div className="li-items">
        <ul className="left-ul">
          <li className="left-li">{profSkills.InfrastructureManagement}</li>
          <br />
          <li className="left-li">{profSkills.WordPress}</li>
          <br />
          <li className="left-li">{profSkills.BackEnd}</li>
          <br />
        </ul>

        <ul className="right-ul">
          <li className="right-li">{profSkills.FrontEnd}</li>
          <br />
          <li className="right-li">{profSkills.Web}</li>
          <br />
          <li className="right-li">{profSkills.IssueTracking}</li>
        </ul>
      </div>
    </section>
  );
};

export default ProfessionalSkill;
