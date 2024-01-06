import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import PageContent from '../content/PageContent.json';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Form: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

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

      if (response.ok) {
        setSuccess(true);
        setMessage(data.message);
        setFormData(initialFormData);
        setTimeout(() => {
          setSuccess(false);
          setMessage('');
          if (nameRef.current) nameRef.current.value = '';
          if (emailRef.current) emailRef.current.value = '';
          if (messageRef.current) messageRef.current.value = '';
        }, 4000); 
      } else {
        setSuccess(false);
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccess(false);
      setMessage('Error submitting the form.');
    }
  };

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

  return (
    <section className="form-section">
      <div className="div-div">
        <div className="form-container">
        <h1 className="contact-me-from-title">Contact Me</h1>
          {success ? (
            <p className="success-message">{message}</p>
          ) : (
            <form className="form-form" method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="input-label" htmlFor="name">
                  Name
                </label>
                <input
                  ref={nameRef}
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
                  ref={emailRef}
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
                  ref={messageRef}
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
          )}
          {success && <p className="success-message">Thank you for contacting me!</p>}
        </div>

        <div className="contact-info">
          <p className="reach-out">{contactText.contactMeText}</p>
        </div>
      </div>
    </section>
  );
};

export default Form;
