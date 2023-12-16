import "@fortawesome/fontawesome-free/css/all.css";
import Image from "next/image";
import Link from "next/link";
import socialLinks from "./SocialLinks";

const Header = () => {
  const { facebook, twitter, instagram, github, linkedin } = socialLinks;

  return (
    <div style={{ maxWidth: "1380px", margin: "auto", paddingTop: "20px" }}>
      <nav
        className={`flex  md:flex-row items-center justify-between p-4 lg:p-8`}
      >
        <div className="flex items-center mb-4 md:mb-0">
          <div className="image-container mr-4">
            <Link href={"/"}>
              <Image
                className="LogoImage"
                src="/em-logo.png"
                alt="Description of the image"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
        <div className={`socialtop`}>
          <div className="top-social flex items-center space-x-2">
            <a href={facebook} target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
            <a href={twitter} target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href={instagram} target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={github} target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href={linkedin} target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
