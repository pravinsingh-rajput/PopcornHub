import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const onclickhandle = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer_container">
        <ul class="quick_links">
          <li onClick={onclickhandle}>Terms of use</li>
          <li onClick={onclickhandle}>Privacy Policy</li>
          <li onClick={onclickhandle}>About</li>
          <li onClick={onclickhandle}>Blog</li>
          <li onClick={onclickhandle}>F&Q</li>
          <li onClick={onclickhandle}>Contact Us</li>
        </ul>
        <p className="footer_description">
          Welcome to PopcornHub, your ultimate destination for streaming the
          latest movies and TV shows online. Our website offers a vast
          collection of high-quality content from all genres, including action,
          comedy, drama, horror, romance, and more. Whether you are in the mood
          for a thrilling blockbuster or a heartwarming indie film, PopcornHub
          has got you covered.
        </p>
        <div className="social_icon">
          <InstagramIcon className="social_icon" />
          <FacebookIcon className="social_icon" />
          <TwitterIcon className="social_icon" />
          <LinkedInIcon className="social_icon" />
        </div>
        <p className="copyright">© 2023 PopcornHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
