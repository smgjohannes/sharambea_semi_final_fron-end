import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/About.css";

import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MainContainer } from "../components/Styles";

import {
  HeadingSecondary,
  PageHeaderOverlay,
  PageHeaderContainer,
} from "../components/HeadingElements";

import team from "../assets/images/agents/sharambea_team.jpg";
import chelsea from "../assets/images/agents/chelsea.jpg";
import nangy from "../assets/images/agents/nangy.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <PageHeaderContainer>
        <PageHeaderOverlay />
        <HeadingSecondary fontColor="#fff">About us</HeadingSecondary>
      </PageHeaderContainer>
      <MainContainer>
        <div>
          <div className="about-container--inner">
            <section className="story-container">
              <div className="story-inner--container">
                <div className="story-content">
                  <h2>Company Overview:</h2>

                  <hr></hr>
                  <p>
                    Sharambea Properties is a dynamic real estate agency
                    specializing in providing comprehensive real estate services
                    across various market segments (different type of clients).
                    At Sharambea Properties we offer a complete and professional
                    approach to your real estate requirements. Whether you're
                    looking for residential, commercial, or investment
                    properties, Sharambea Properties strives to make the real
                    estate process seamless and transparent
                  </p>

                  <button className="contact-button">
                    Get in touch with us
                  </button>
                </div>
                <div className="story-video">
                  <img src={team} alt="Our Story" />
                  <button className="play-button">Your Trusted Agents</button>
                </div>
              </div>
            </section>
            {/* Mission, Vision, and Values Section */}
            <section className="mv-section">
              <h3>Our Mission, Vision, and Values</h3>
              <div className="mv-cards">
                <div className="mv-card">
                  <h4>Mission</h4>
                  <p>
                    To provide exceptional real estate services through
                    integrity, dedication, and innovative solutions, ensuring
                    that every client’s real estate goals are achieved with
                    precision and satisfaction.
                  </p>
                </div>

                <div className="mv-card">
                  <h4>Vision</h4>
                  <p>
                    To be a leading real estate agency recognized for its
                    commitment to quality service, and building long-term
                    relationships based on trust and excellence.
                  </p>
                </div>

                <div className="mv-card">
                  <h4>Values</h4>
                  <ul>
                    <li>
                      <strong>Integrity:</strong> Commitment to honesty and
                      transparency.
                    </li>
                    <li>
                      <strong>Client-Centric:</strong> Personalized services
                      tailored to each client.
                    </li>
                    <li>
                      <strong>Innovation:</strong> Leveraging technology for
                      creative solutions.
                    </li>
                    <li>
                      <strong>Excellence:</strong> Exceeding client expectations
                      in every interaction.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="our-team">
              <h3>Our Team</h3>
              <div className="about-team-container">
                <div className="about-team-card">
                  <div className="about-team-card-image">
                    <img src={chelsea} alt="Agent 1" />
                  </div>
                  <div className="about-team-card-text">
                    <h4>Chelsea</h4>
                    <p>
                      <strong>Principal Agent,</strong> Chelsea brings over 8
                      years of experience in the real estate industry,
                      specializing in residential and commercial property sales.
                      Her deep understanding of the local market and dedication
                      to client satisfaction makes her a go-to professional for
                      buying or selling properties.
                    </p>
                    <p>
                      Known for her personal connection with clients and strong
                      negotiation skills, Chelsea ensures every deal benefits
                      her clients' best interests.
                    </p>

                    <hr />
                    <p className="agent-contact-icon">
                      <FaPhone
                        style={{ color: "#f0a500", fontSize: "35 " }}
                        className="w3-margin-right"
                      />
                      +264 85 3833201
                    </p>
                    <p className="agent-contact-icon">
                      <TfiEmail
                        style={{ color: "#f0a500", fontSize: "35 " }}
                        className="w3-margin-right"
                      />{" "}
                      chelsea@sharambeaproperties.com
                    </p>
                  </div>
                </div>

                <div className="about-team-card">
                  <div className="about-team-card-text">
                    <h4>Nangy</h4>
                    <p>
                      <strong>Real Estate Agent</strong> Nangy is a dedicated
                      agent with 2 years of experience, specializing in both
                      residential and commercial properties. She is passionate
                      about real estate and stays ahead of market trends to
                      guide her clients through the real estate process.
                    </p>
                    <p>
                      Nangy ensures her clients are well-informed, whether
                      buying, selling, or leasing properties.
                    </p>

                    <hr />
                    <p className="agent-contact-icon">
                      <FaPhone
                        style={{ color: "#f0a500", fontSize: "35 " }}
                        className="w3-margin-right"
                      />{" "}
                      +264 81 2036652
                    </p>
                  </div>
                  <div className="about-team-card-image">
                    <img src={nangy} alt="Agent 2" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </MainContainer>
    </div>
  );
};

export default About;
