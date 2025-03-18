'use client';
import React, { useEffect } from 'react';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget
      .querySelector('.dropdown-menu')
      .classList.remove('show');
  }
  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="#">
          <img src="/assets/imgs/logo-light.svg" alt="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            
              <li className="nav-item">
              <a className="nav-link" href="/">
                <span className="rolling-text">Home</span>
              </a>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/services"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Services</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/services/web-development">
                    Web Development
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/local-seo">
                    Local SEO
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/online-business-listings">
                    Online Business Listings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/social-media-management">
                    Social Media Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/reputation-management">
                    Reputation Managment
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services/custom-photography">
                    Custom Photography
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-FAQ">
                    FAQS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-404">
                    Error 404
                  </a>
                </li>
              </ul>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="/industries"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Industries</span>
              </a>
              <div className="dropdown-menu">
              <a className="dropdown-item" href="/industries/accounting">
                  Accounting
                </a>
                <a className="dropdown-item" href="/industries/childcare">
                  Child Care
                </a>
                <a className="dropdown-item" href="/industries/cleaning">
                  Cleaning Services
                </a>
                <a className="dropdown-item" href="/industries/construction">
                  Construction
                </a>
                <a className="dropdown-item" href="/industries/consulting">
                  Consulting
                </a>
                <a className="dropdown-item" href="/industries/dentists">
                  Dentists
                </a>
                <a className="dropdown-item" href="/industries/landscaping">
                  Landscaping
                </a>
                <a className="dropdown-item" href="/industries/medical">
                  Medical
                </a>
                <a className="dropdown-item" href="/industries/photographers">
                  Photographers
                </a>
                <a className="dropdown-item" href="/industries/plumbing">
                  Plumbing
                </a>
                <a className="dropdown-item" href="/industries/roofers">
                  Roofers
                </a>
                
              </div>
            </li>
            <li>
              <a
                className="nav-link"
                href="/portfolio"
              >
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Let&apos;s contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
