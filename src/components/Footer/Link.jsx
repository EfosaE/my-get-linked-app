import React from 'react'

const Link = ({links}) => {
    return (
      <div className="footer-link">
        <h4 className="footer-div-title">Useful Links</h4>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.text}>
                <a href="">{link.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default Link
