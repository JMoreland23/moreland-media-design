import React from 'react';

function Feat() {
  return (
    <section className="feat">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                How It <span className="fw-200">Work</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a href="#0" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Our approach</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <span className="mb-30 p-color">01 .</span>
              <h6 className="mb-20">Google My Business Optimization</h6>
              <p>
              We&apos;ll optimize your Google My Business profile to ensure it&apos;s complete, accurate, and engaging. This includes adding high-quality photos and videos, responding to reviews, and claiming your business on other local directories.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <span className="mb-30 p-color">02 .</span>
              <h6 className="mb-20">Local Citation Building</h6>
              <p>
              We&apos;ll create consistent citations across the web, ensuring your business information is accurate and up-to-date on major search engines, directories, and online platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <span className="mb-30 p-color">03 .</span>
              <h6 className="mb-20">Local Keyword Research</h6>
              <p>
              We&apos;ll conduct in-depth keyword research to identify the most relevant and high-volume local keywords that your target audience is using to search for businesses like yours.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/6.png" alt="" />
              </div>
              <span className="mb-30 p-color">04 .</span>
              <h6 className="mb-20">On-Page Local SEO</h6>
              <p>
                We&apos;ll optimize your website&apos;s content, including title tags, meta descriptions, and image alt text, to incorporate relevant local keywords and improve your search engine rankings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feat;
