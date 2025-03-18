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
              <h6 className="mb-20">Strategic Content Creation</h6>
              <p>
              We create engaging and relevant content tailored to your brand and target audience. From eye-catching visuals to compelling captions, we'll help you capture attention and spark conversations.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <span className="mb-30 p-color">02 .</span>
              <h6 className="mb-20">Platform Management</h6>
              <p>
              We'll manage your social media accounts across all major platforms, including Facebook, Instagram, Twitter, LinkedIn, and more. We'll ensure your profiles are optimized, consistent, and active.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <span className="mb-30 p-color">03 .</span>
              <h6 className="mb-20">Audience Engagement</h6>
              <p>
                We'll actively engage with your followers, respond to comments and messages, and build a strong online community around your brand.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/6.png" alt="" />
              </div>
              <span className="mb-30 p-color">04 .</span>
              <h6 className="mb-20">Social Media Advertising</h6>
              <p>
                We'll develop and execute targeted social media advertising campaigns to reach your ideal customers and drive conversions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feat;
