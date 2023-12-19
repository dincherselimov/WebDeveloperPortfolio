import React, { useEffect } from "react";
import PageContent from '../content/PageContent.json';
const Form = () => {
const contactText = PageContent.ContactMe;
  useEffect(() => {
    const getReachOutText =
      document.querySelectorAll<HTMLLIElement>(".reach-out");

    window.addEventListener("scroll", () => {
      animateOnScrollText2(getReachOutText, "reach-out-animation");
    });

    return () => {
      window.removeEventListener("scroll", () => {
        animateOnScrollText2(getReachOutText, "reach-out-animation");
      });
    };
  }, []);

  const animateOnScrollText2 = (
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
    <section className="form-section">
      <div className="div-div">
        <div className="form-container">
          <h1 className="contact-me-from-title">Contact Me</h1>
          <form className="form-form" method="post">
            <div className="form-group">
              <label className="input-label" htmlFor="name">
                Name
              </label>
              <input
                className="input-fields"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                required
              ></input>
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor="email">
                Email
              </label>
              <input
                className="input-fields"
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
                required
              ></input>
            </div>
            <div className="form-group">
              <label className="input-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="text-area"
                placeholder="Enter your message"
                id="message"
                name="message"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button className="send-message" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <p className="reach-out">
           {contactText.contactMeText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Form;
