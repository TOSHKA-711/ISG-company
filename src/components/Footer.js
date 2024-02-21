import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p>
          All Rights Reserved <span>ISG Kuwait</span> © 2024
        </p>
        <div className="icons">
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaSquareXTwitter />
          </a>
          <a>
            <FaInstagramSquare />
          </a>
          <a>
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
