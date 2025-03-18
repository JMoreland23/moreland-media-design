import React from 'react'

const Sidebar = () => {
  return (
    <div className="col-lg-4">
            <div className="sidebar">
              {/* <div className="widget">
                <h6 className="title-widget">Search Here</h6>
                <div className="search-box">
                  <input type="text" name="search-post" placeholder="Search" />
                  <span className="icon pe-7s-search"></span>
                </div>
              </div> */}
              <div className="widget catogry">
                <h6 className="title-widget">Services</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <a href="/services/web-development">Web Design</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/services/local-seo">Local SEO</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/services/online-business-listings">Online Business Listings</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/services/social-media-management">Social Media Management</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/services/reputation-management">Reputation Management</a>
                    </span>
                  </li>
                  <li>
                    <span>
                      <a href="/services/custom-photography">Custom Photography</a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Industries</h6>
                <div>
                  <a href="/industries/accounting">Accounting</a>
                  <a href="/industries/childcare">Childcare</a>
                  <a href="/industries/cleaning">Cleaning Services</a>
                  <a href="/industries/construction">Construction</a>
                  <a href="/industries/consulting">Consulting</a>
                  <a href="/industries/dentists">Dentists</a>
                  <a href="/industries/landscaping">Landscaping</a>
                  <a href="/industries/medical">Medical</a>
                  <a href="/industries/photographers">Photographers</a>
                  <a href="/industries/plumbing">Plumbing</a>
                  <a href="/industries/roofers">Roofers</a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Sidebar