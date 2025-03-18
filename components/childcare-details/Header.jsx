'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0">
                  <span>Industries  </span>
                </a>
                <a href="#0">
                  <span> We Serve </span>
                </a>
              </div>
              <h1 className="fz-55 mt-30">
                Enroll More Children: <span className="fw-200">Digital Marketing for Childcare Centers</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        data-background="/assets/imgs/blog/b1.jpg"
      ></div>
    </div>
  );
}

export default Header;
