import PageContent from '../content/PageContent.json';
const skillData = PageContent.PersonalSkills; 
const skills = [
    {
      id: 1,
      img: <i className="fab fa-html5"></i>,
      name: "HTML",
      description: skillData.html,
    },
    {
      id: 2,
      img: <i className="fab fa-css3"></i>,
      name: "CSS3",
      description: skillData.css,
    },
    {
      id: 3,
      img: <i className="fab fa-js"></i>,
      name: "JavaScript",
      description: skillData.JavaScript,
    },
    {
      id: 4,
      img: <i className="fab fa-react"></i>,
      name: "Next.js",
      description: skillData.NextJs,
    },
    {
      id: 5,
      img: <i className="fab fa-react"></i>,
      name: "React",
      description: skillData.React,
    },
    {
      id: 6,
      img: <i className="fab fa-php"></i>,
      name: "PHP",
      description: skillData.PHP,
    },
    {
      id: 7,
      img: <i className="fab fa-java"></i>,
      name: "Java OOP",
      description: skillData.Java,
    },
    {
      id: 8,
      img: <i className="fab fa-github"></i>,
      name: "Version Control",
      description: skillData.VersionControl,
    },
  ];


  export default skills;