import React, { useState } from "react";
import "./LandingPage.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Analytics from '../../assets/Analytics 1.jpg';
import div from '../../assets/div.jpg';
import div2 from '../../assets/div2.jpg';
import a1 from '../../assets/a1.png';
import a2 from '../../assets/a2.png';
import a3 from '../../assets/a3.png';
import a4 from '../../assets/a4.png';
import a5 from '../../assets/a5.png';
import a6 from '../../assets/a6.png';
import a7 from '../../assets/a7.png';
import a8 from '../../assets/a8.jpg';
import a9 from '../../assets/a9.png';
import a10 from '../../assets/a10.png';
import a11 from '../../assets/a11.png';
import logo from '../../assets/Group.png'

const LandingPage = () => {

  const messages = [
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
    {
      heading: "Amazing tool! Saved me months",
      content: "This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.",
      user: "John Master",
      position: "Director, Spark.com"
    },
  ]

  return (
    <div className="container_Landing">
      <nav className="navbar">
        <div className="logo">
          <img src={logo}/>
          <div>SPARK</div>&nbsp;
          <div>|</div>&nbsp;
          <div>Marketplace</div>
        </div>
        <div id="buttton">
          <Link to="/register">
            <button className="primary-btn">Sign up free</button>
          </Link>
        </div>
      </nav>


      <div className="main-container">
        <div className="hero">
          <div className="hero_1">
            <h1>The easiest place to update and share your Connection</h1>
            <p>
              Help your followers discover everything you’re sharing all over the internet, in one simple place. They’ll thank you for it!
            </p>
            <button className="btn secondary-btn">Get your free spark</button>
          </div>
          <img src={Analytics} alt="Dashboard" className="hero-img" />
        </div>

        <section className="hero">
          <img src={div} alt="Chart" className="hero-img" />
          <div className="hero_10">
            <h1>Analyze your audience and keep your followers engaged</h1>
            <p>Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          </div>
        </section>
        <section className="hero">
          <div className="hero_11">
            <h1>Share limitless content in limitless ways</h1>
            <p>Connect your content in all its forms and help followers find more of what they’re looking for. Your TikToks, Tweets, YouTube videos, music, articles, recipes, podcasts and more… It all comes together in one powerful place</p>
          </div>
          <img src={div2} alt="Content" className="hero-img" />
        </section>

        <section className="testimonials">
          <div className="extra">
            <h2>Here's what our <span className="highlight">customer</span> has to say</h2>
            <div className="short-term">
              <img src={a11} />
              <p>[short description goes in here] lorem ipsum is a placeholder text to demonstrate.</p>
            </div>
          </div>
          <button className="btn outline-btn">Read customer stories</button>

          <div className="messages-container">
            {messages.map((item, index) => (
              <div key={index} className="message-card">
                <h1>{item.heading}</h1>
                <p>{item.content}</p>
                <h2>{item.user}</h2>
                <h3>{item.position}</h3>
              </div>
            ))}
          </div>


          {/* <div className="testimonial-grid">
            <div className="testimonial-card">
              <FaCheckCircle className="icon" />
              <p>Amazing tool! Saved me months of work.</p>
              <span>- Satisfied Customer</span>
            </div>
            <div className="testimonial-card">
              <FaCheckCircle className="icon" />
              <p>Highly recommend for scaling businesses.</p>
              <span>- Another User</span>
            </div>
          </div> */}
        </section>

        {/* Integrations */}
        <section className="integrations">
          <h2>All Link Apps and Integrations</h2>
          <div className="integration-grid">
            <img src={a8} alt="" />
            <img src={a9} alt="" />
            <img src={a1} alt="" />
            <img src={a2} alt="" />
            <img src={a3} alt="" />
            <img src={a4} alt="" />
            <img src={a5} alt="" />
            <img src={a6} alt="" />
            <img src={a7} alt="" />
          </div>
        </section>
      </div>

      <footer className="footer">
        <p>© 2024 Spark Marketplace. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;