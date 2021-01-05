import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&#169; Copyright jPortfolio. All Rights Reserved 2021</p>
      <div>
        Designed by <span className="footer__author">Jhosep Davila</span>
        <span className="footer__github">
          <a href="https://github.com/jhosep98/jdb-portfolio" target="_blank">
            <i className="fa fa-github"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};
