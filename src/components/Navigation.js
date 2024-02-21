import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../imgs/logo.png";
import kwFlag from "../imgs/KW-flag.png";
import EnFlag from "../imgs/english flag.png";

export default function Navigation() {
  const handleClick = (e) => {
    document.querySelectorAll(".me-auto .li").forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.toggle("active");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");

      sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight) {
          // console.log(`Scrolled to ${section.id} section!`);
          printSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const printSection = (sectionId) => {
    // console.log(`Printing ${sectionId} section...`);

    switch (sectionId) {
      case "home":
        document.querySelectorAll(".me-auto .li").forEach((li) => {
          li.classList.remove("active");
        });
        document.querySelector(".home-li").classList.add("active");
        break;
      case "about":
        document.querySelectorAll(".me-auto .li").forEach((li) => {
          li.classList.remove("active");
        });
        document.querySelector(".about-li").classList.add("active");
        break;
      case "services":
        document.querySelectorAll(".me-auto .li").forEach((li) => {
          li.classList.remove("active");
        });
        document.querySelector(".services-li").classList.add("active");
        break;
      case "portfolio":
        document.querySelectorAll(".me-auto .li").forEach((li) => {
          li.classList.remove("active");
        });
        document.querySelector(".portfolio-li").classList.add("active");
        break;
      case "contact":
        document.querySelectorAll(".me-auto .li").forEach((li) => {
          li.classList.remove("active");
        });
        document.querySelector(".contact-li").classList.add("active");
        break;

      default:
    }
  };

  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // You can add additional logic here to handle language change, like updating language in state, or passing it to a parent component.
  };

  return (
    <>
      <Navbar expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <img src={logo} alt="logo"></img>
              <p>ISG Company</p>
            </div>
          </Navbar.Brand>
          <div className="nav-content">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto list">
                <a
                  href="#home"
                  className="li nav1 home-li"
                  onClick={handleClick}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="li nav2 about-li"
                  onClick={handleClick}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="li nav3 services-li"
                  onClick={handleClick}
                >
                  Services
                </a>

                <a
                  href="#portfolio"
                  className="li nav5 portfolio-li"
                  onClick={handleClick}
                >
                  portfolio
                </a>

                <a
                  href="#contact"
                  className="li nav5 contact-li"
                  onClick={handleClick}
                >
                  Contact
                </a>

                <div className="lang-btn button">
                  <select
                    id="language"
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                  >
                    <option
                      value="English"
                      style={{ backgroundImage: `url(${EnFlag})` }}
                    >
                      English
                    </option>
                    <option
                      value="Arabic"
                      style={{ backgroundImage: `url(${kwFlag})` }}
                    >
                      Arabic
                    </option>
                 
                    {/* Add more options as needed */}
                  </select>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
