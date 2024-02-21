import React from "react";

export default function About() {
  return (
    <div className="about section" id="about">
      <div className="container">
        <div className="title">
          <h1>ABOUT US</h1>
          <h2>WHO WE ARE</h2>
        </div>
        <div className="text">
          <p>
            The Information Systems Group (ISG) is a leading digital
            transformation partner headquartered in Kuwait, serving clients
            across Kuwait and the Gulf region. With over 15 years of experience
          </p>
          <p>
            ISG specializes in crafting digital transformation strategies and
            providing tailored solutions to help businesses thrive in today's
            digital landscape.
          </p>
        </div>
        <button class="about-button" data-text="Awesome">
          <span class="actual-text">&nbsp;More&nbsp;</span>
          <span aria-hidden="true" class="hover-text">
            &nbsp;More&nbsp;
          </span>
        </button>
      </div>
    </div>
  );
}
