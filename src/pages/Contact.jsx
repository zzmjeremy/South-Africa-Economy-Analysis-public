import React from "react";
import PageContainer from "../components/PageContainer";
import "./Contact.css";

function Contact() {
  return (
    <PageContainer>
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-info">
          <div>
            <strong>Wouter Bam</strong>
            <span>School of Engineering</span>
            <span>The University of British Columbia, Canada</span>
            <a href="mailto:wouter.bam@ubc.ca">wouter.bam@ubc.ca</a>
          </div>

          <div>
            <strong>Zhuomin Zhu</strong>
            <span>MEng in Engineering</span>
            <span>The University of British Columbia, Canada</span>
            <a href="mailto:zzm2024@ubc.ca">zzm2024@ubc.ca</a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Contact;
