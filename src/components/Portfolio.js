import React, { useState } from "react";
import image1 from "../imgs/p1.png";
import image2 from "../imgs/p2.png";
import image3 from "../imgs/p3.png";
import image4 from "../imgs/p4.png";
import image5 from "../imgs/p5.png";
import image6 from "../imgs/p6.png";
import image7 from "../imgs/p7.png";
import image8 from "../imgs/p8.png";
import image9 from "../imgs/p9.png";
import image10 from "../imgs/p10.png";
import image11 from "../imgs/p11.png";
import image12 from "../imgs/p12.png";

const allClients = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export default function Portfolio() {
  const [clients, setClients] = useState(allClients);

  const handleClickAll = (e) => {
    setClients(allClients);
    document.querySelectorAll(".topic").forEach((li) => {
      li.classList.remove("active-topic");
    });
    e.target.classList.toggle("active-topic");
  };

  const handleClickErp = (e) => {
    document.querySelectorAll(".topic").forEach((li) => {
      li.classList.remove("active-topic");
    });
    e.target.classList.toggle("active-topic");
    const erpClients = [
      image1,
      image10,
      image11,
      image12,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
    ];
    setClients(erpClients);
  };

  const proc_sys = (e) => {
    document.querySelectorAll(".topic").forEach((li) => {
      li.classList.remove("active-topic");
    });
    e.target.classList.toggle("active-topic");
    const procSysClients = [
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image1,
      image2,
      image9,
      image10,
      image11,
      image12,
    ];
    setClients(procSysClients);
  };

  const legal_case = (e) => {
    document.querySelectorAll(".topic").forEach((li) => {
      li.classList.remove("active-topic");
    });
    e.target.classList.toggle("active-topic");
    const legalCaseClients = [
      image1,
      image2,
      image3,
      image4,
      image8,
      image9,
      image10,
      image11,
      image12,
      image5,
      image6,
      image7,
    ];
    setClients(legalCaseClients);
  };

  // const handleClick = (e) => {
  //   document.querySelectorAll(".topic").forEach((li) => {
  //     li.classList.remove("active-topic");
  //   });
  //   e.target.classList.toggle("active-topic");
  // };

  return (
    <div className="portfolio section" id="portfolio">
      <div className="container">
        <div className="title">
          <h1>LATEST WORK</h1>
          <h2>Portfolio</h2>
          <div className="topics">
            <p className="topic active-topic" onClick={handleClickAll} id="all">
              ِAll
            </p>
            <p className="topic" onClick={handleClickErp} id="erp">
              ERP Systems
            </p>
            <p className="topic" onClick={proc_sys} id="proc-sys">
              Procurement System
            </p>
            <p
              className="last-child topic"
              onClick={legal_case}
              id="legal_case"
            >
              Legal Case Management
            </p>
          </div>
        </div>
        <div className="port-content">
          {clients.map((image, index) => (
            <div className="card" key={index}>
              <img src={image} alt={`image${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




