// client/components/Form.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import PageContent from '../content/PageContent.json';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const contactText = PageContent.ContactMe;

  useEffect(() => {
    const getReachOutText = document.querySelectorAll<HTMLLIElement>('.reach-out');

    window.addEventListener('scroll', () => {
      animateOnScrollText2(getReachOutText, 'reach-out-animation');
    });

    return () => {
      window.removeEventListener('scroll', () => {
        animateOnScrollText2(getReachOutText, 'reach-out-animation');
      });
    };
  }, []);

  const animateOnScrollText2 = (items: NodeListOf<HTMLLIElement>, animationClass: string) => {
    items.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (itemTop < windowHeight - 10) {
        item.classList.add(animationClass);
      }
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log(data);
  
      // Handle success or error messages
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <section className="form-section">
      <div className="div-div">
        <div className="form-container">
          <h1 className="contact-me-from-title">Contact Me</h1>
          <form className="form-form" method="post" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                required
              />
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
                onChange={handleChange}
                required
              />
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
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <button className="send-message" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="contact-info">
          <p className="reach-out">{contactText.contactMeText}</p>
        </div>
      </div>
    </section>
  );
};

export default Form;
