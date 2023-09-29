import React from "react";


const SocialLinks = ({ socialLinks }) => {
  return (
    <ul className="social-links">
      {socialLinks.map((socialLink) => {
        return (
          <li key={socialLink.url}>
            <a href="">{socialLink.icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
