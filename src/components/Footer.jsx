import React from "react";
// import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="dark:text-neutral-700 text-center lg:text-left">
      {/* <img src={Logo} alt="" /> */}
      <div className="p-5 text-center text-amber-300 dark:bg-neutral-200 ">
        © 2024 Copyright:
        <a
          className="p-5 text-center text-amber-300 dark:bg-neutral-200"
          href="https://www.linkedin.com/in/beatriz-gonzalez-ju%C3%A1rez/" 
          target="_blank"
        >
          Made with ♥️ and <b>React.js</b> by <b> bcampdat </b>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
