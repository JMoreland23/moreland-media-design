import Image from 'next/image';
import React from 'react';

function Works() {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb30">
              <Image src="/assets/imgs/works/3/2.jpg" alt="" width={640} height={426} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <Image src="/assets/imgs/works/3/3.jpg" alt="" width={640} height={426} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
