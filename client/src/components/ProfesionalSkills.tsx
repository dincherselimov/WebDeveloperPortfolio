import React from "react";
import { useEffect } from "react";



const ProfessionalSkill = () => {
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
        <h2 className="prof-title">Professionally Acquired Skills</h2>
      </div>

      <div className="li-items">
        <ul className="left-ul">
          <li className="left-li">
            Infrastructure Management: Proficient in working with Virtual
            Machines and maintaining Apache/Nginx servers, ensuring seamless
            website performance and reliability.
          </li>
          <br />
          <li className="left-li">
            WordPress Expertise: Proficient in creating and maintaining
            WordPress websites, with a strong understanding of responsive design
            principles
          </li>
          <br />
          <li className="left-li">
            Backend Development: Skilled in PHP development, adept at creating
            and maintaining PHP code, including Object-Oriented Code, and
            writing reusable code for improved efficiency.
          </li>
          <br />
        </ul>

        <ul className="right-ul">
          <li className="right-li">
            Infrastructure Management: Proficient in working with Virtual
            Machines and maintaining Apache/Nginx servers, ensuring seamless
            website performance and reliability.
          </li>
          <br />
          <li className="right-li">
            WordPress Expertise: Proficient in creating and maintaining
            WordPress websites, with a strong understanding of responsive design
            principles
          </li>
          <br />
          <li className="right-li">
            Backend Development: Skilled in PHP development, adept at creating
            and maintaining PHP code, including Object-Oriented Code, and
            writing reusable code for improved efficiency.
          </li>
        </ul>
       
      </div>
    
    </section>
  );
};

export default ProfessionalSkill;
