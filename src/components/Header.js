import React from "react";


// This Component is for Header which contains my logo

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="website logo" style={{ height: "50%" }} />
      </nav>
    </header>
  );
};

export default Header;
