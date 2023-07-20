import React from "react";
import { useState } from "react";
const Footer = () => {
  const [click, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "Rick and Morty Fan Club";

  const handleClick = () => {
    setClicks(click + 1);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© {year} Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <svg className="bi" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
