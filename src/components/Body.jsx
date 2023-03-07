/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Body() {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a className="up-arrow" onClick={() => window.scrollTo(0, 0)}></a>
  );
}

export default Body;
