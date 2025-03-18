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
              <h6 className="mb-20">Product Photography</h6>
              <p>
              Showcase your products in their best light with our professional product photography. We create stunning images that highlight the features and benefits of your products.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <span className="mb-30 p-color">02 .</span>
              <h6 className="mb-20">Lifestyle Photography</h6>
              <p>
              Tell your brand&apos;s story with captivating lifestyle photography. We create authentic images that resonate with your target audience and showcase your brand&apos;s unique personality.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <span className="mb-30 p-color">03 .</span>
              <h6 className="mb-20">Location Photography</h6>
              <p>
              Showcase your business location with professional images. We capture the essence of your space, creating inviting visuals that attract customers.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/6.png" alt="" />
              </div>
              <span className="mb-30 p-color">04 .</span>
              <h6 className="mb-20">Event Photography</h6>
              <p>
                Capture the memorable moments of your events with our professional event photography. We document your events with high-quality images that tell a story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feat;
