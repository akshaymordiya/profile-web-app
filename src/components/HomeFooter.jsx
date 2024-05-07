import React from 'react'

const HomeFooter = () => {
  return (
    <>
    <footer>
      <div className="footer-wrapper footer-overlay-bg black-bg-2 p-relative z-index-1 fix">
        <div className="footer-shape-1">
          <img src="/assets/footer-shape.png" alt="" />
        </div>
        <div className="footer-img">
          <img src="/assets/footer-3-1.png" alt="" />
        </div>
        <div className="footer-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
                <div className="footer-title-box">
                  <span className='footer-subtitle'>Contact Me</span>
                  <h3 className="footer-title">
                  Let's work  <br /> Together
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default HomeFooter