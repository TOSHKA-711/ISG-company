import React from "react";

export default function Services() {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="title">
          <h1>SERVICES</h1>
          <h2>Our Services</h2>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-image card-image1"></div>
            <h1 className="title">Loan Management System</h1>
            <p className="text">
              A comprehensive platform designed to streamline the loan
              processing workflow, enhancing efficiency and accuracy in managing
              loan applications, approvals, and disbursements.
            </p>
          </div>
          <div className="card">
            <div className="card-image card-image2"></div>
            <h1 className="title">Loan Coverage System</h1>
            <p className="text">
              This system offers in-depth analysis and evaluation of loan
              coverage, providing financial institutions with valuable insights
              to make informed decisions regarding loan approvals and risk
              management.
            </p>
          </div>
          <div className="card">
            <div className="card-image card-image3"></div>
            <h1 className="title">Legal Case Management</h1>
            <p className="text">
              An optimized solution for managing legal workflows efficiently,
              including case tracking, document management, and collaboration
              among legal teams, ensuring compliance and timely resolution of
              cases.
            </p>
          </div>
          <div className="card">
            <div className="card-image card-image4"></div>
            <h1 className="title">Contract Management System</h1>
            <p className="text">
              This system facilitates organized and efficient management of
              contract lifecycles, from creation and negotiation to execution
              and renewal, enhancing transparency, compliance, and risk
              mitigation.
            </p>
          </div>
          <div className="card">
            <div className="card-image card-image5"></div>
            <h1 className="title">Procurement System</h1>
            <p className="text">
              A comprehensive platform for managing procurement processes,
              including supplier selection, purchase order management, and
              invoice processing, optimizing supply chain efficiency and cost
              savings.
            </p>
          </div>
          <div className="card">
            <div className="card-image card-image6"></div>
            <h1 className="title">ERP Systems</h1>
            <p className="text">
              Specialized systems for Enterprise Resource Planning (ERP)
              implementation, integrating core business processes such as
              finance, HR, inventory, and supply chain management, improving
              operational efficiency and decision-making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
