'use client';
import isInView from '@/common/isInView';
import Image from 'next/image';
import React, { useEffect } from 'react';

function Intro() {
  function handleShowProgressValues() {
    isInView({
      selector: '.skill-progress .progres',
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute('data-value');
      },
    });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleShowProgressValues);
    return () => window.removeEventListener('scroll', handleShowProgressValues);
  }, []);
  return (
    <section className="intro-skill section-padding pt-0">
      <div className="container pt-80 pb-80">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color mb-15">About Us</h6>
              <h2 className="mb-15">Best creative & modern digital agency.</h2>
              <p>
              Welcome to Moreland Media Design, your trusted partner in crafting compelling digital experiences. We specialize in providing a comprehensive suite of services tailored to help businesses of all sizes achieve their online goals. From captivating web design and effective SEO strategies to engaging social media management and impactful branding, we empower businesses to thrive in the digital realm.
              </p>
              <div className="skills-box row mt-80">
                <div className="col-md-6">
                  <div className="skill-item sm-mb30">
                    <h5 className="sub-title mb-15">UI / UX Design 90%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="90%"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-item">
                    <h5 className="sub-title mb-15">Development 80%</h5>
                    <div className="skill-progress">
                      <div className="progres" data-value="80%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="imgs">
              <div className="img1">
                <Image src="/assets/imgs/intro/2.jpg" alt="" width={350} height={350} />
              </div>
              <div className="img2">
                <Image src="/assets/imgs/intro/3.jpg" alt="" width={350} height={350} />
              </div>
              <div className="img3">
                <Image src="/assets/imgs/intro/4.jpg" alt="" width={350} height={350} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
