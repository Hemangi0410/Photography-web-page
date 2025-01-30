import React from "react";
import "./photography.css";
import "swiper/swiper-bundle.min.css";

const Header = () => (
  <header className="header" id="home">
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            <img src="logo-white.png" alt="logo" />
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#service">SERVICES</a></li>
        <li className="nav__logo">
          <a href="#">
            <img src="logo-white.png" alt="logo" />
          </a>
        </li>
        <li><a href="#client">CLIENT</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT US</a></li>
      </ul>
    </nav>
  </header>
);

const About = () => (
  <div className="section__container about__container" id="about">
    <h2 className="section__header">WE CAPTURE THE MOMENTS</h2>
    <p className="section__description">
      At Capturer, we specialize in freezing those fleeting moments in time that hold immense significance for you. 
      With our passion for photography and keen eye for detail, we transform ordinary moments into extraordinary memories.
    </p>
    <p className="section__description">
      Whether it's a milestone event, a candid portrait, or the breathtaking beauty of nature, we strive to encapsulate the essence of every moment, ensuring that your cherished memories last a lifetime.
    </p>
    <img src="logo-dark.png" alt="logo" />
  </div>
);

const Portfolio = () => (
  <div className="section__container portfolio__container">
    <h2 className="section__header">~ PORTFOLIO ~</h2>
    <div className="portfolio__grid">
      {["portfolio-1.jpg", "shaadi.jpg", "portfolio-3.jpg"].map((src, index) => (
        <div className="portfolio__card" key={index}>
          <img src={src} alt="portfolio" />
          <div className="portfolio__content">
            <button className="btn">VIEW PORTFOLIO</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => (
  <section className="service" id="service">
    <div className="section__container service__container">
      <h2 className="section__header">~ SERVICES ~</h2>
      <p className="section__description">
        At Capturer, we offer a range of professional photography services tailored to meet your unique needs.
      </p>
      <div className="service__grid">
        {[
          { title: "Portrait Sessions", desc: "Showcase your personality and style in stunning imagery." },
          { title: "Maternity Sessions", desc: "Capture the beauty of new life with our maternity sessions." },
          { title: "Family Sessions", desc: "Cherish the bond of family with candid moments." },
        ].map((service, index) => (
          <div className="service__card" key={index}>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact">
    <div className="section__container footer__container">
      <div className="footer__col">
        <img src="logo-dark.png" alt="logo" />
        <div className="footer__socials">
          {["facebook-fill", "instagram-line", "twitter-fill", "youtube-fill", "pinterest-line"].map((icon, index) => (
            <a href="#" key={index}>
              <i className={`ri-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="footer__col">
        <ul className="footer__links">
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT US</a></li>
          <li><a href="#service">SERVICES</a></li>
          <li><a href="#client">CLIENT</a></li>
          <li><a href="#blog">BLOG</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4>STAY IN TOUCH</h4>
        <p>Keep up-to-date with all things Capturer! Join our community and never miss a moment!</p>
      </div>
    </div>
    <div className="footer__bar">
      Copyright © 2024 Web Design Mastery. All rights reserved.
    </div>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <About />
    <Portfolio />
    <Services />
    <Footer />
  </div>
);

export default App;
