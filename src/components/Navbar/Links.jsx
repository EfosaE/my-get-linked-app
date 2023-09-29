import React from "react";
import { NavLink,  Link} from "react-router-dom";


const Links = ({ links, setRegisterBtn, setShowMenu}) => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`${sectionId}`);
    if (section) {
      const offset = section.getBoundingClientRect().top;
      window.location.hash = `${sectionId}`;
      window.scrollTo(0, window.scrollY + offset - 84);
    }
  };

  return (
    <ul className="links">
      {links.map(({ url, text }) => {
        return (
          <li key={text}>
            <Link to="/"
              onClick={() => {
                scrollToSection(url);
                setRegisterBtn(false);
                setShowMenu(false)
              }}
            >
              {text}
            </Link>
          </li>
        );
      })}
      <li>
        <NavLink
          to="/contact"
          onClick={() => {
            setRegisterBtn(false)
            setShowMenu(false);
          }}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
