import React from "react";
import img from "../../Assets/SoftTrendLogo.png";
function Footer() {
  return (
    <>
      <footer className="">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4  col-sm-4 footer-info">
                <div>
                  <h5>Cloud Services</h5>
                  <ul>
                    <li>business application</li>
                    <li>cloud Security</li>
                    <li>communication & collabrotion</li>
                    <li>infrastructure </li>
                    <li>storage solutions</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-4 footer-info">
                <div>
                  <h5> Sercurity</h5>
                  <ul>
                    <li>Endpoint Security</li>
                    <li>Gateway Security</li>
                    <li>mail Security </li>
                    <li>file Security</li>
                    <li>collabration Security</li>
                    <li>virtualization Security</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 footer-info">
                <div>
                  <h5>Company</h5>
                  <ul>
                    <li>Company Overview</li>
                    <li>mission</li>
                    <li>Policies</li>
                    <li>Contact us </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div>
                  <h5>Newsletter</h5>
                  <ul>
                    <div className="input-group ">
                      <input
                        type="email"
                        className="form-control form-control  py-2"
                        placeholder="Your E-mail"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="join-button fs-5 px-4  "
                        type="button"
                        id="button-addon2"
                      >
                        Subscribe
                      </button>
                    </div>
                  </ul>
                  <p style={{ fontSize: "16px" }}>
                    we are softrend our goal is to translate effects from
                    revolutionizing how companies engage with ther clients &
                    their teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4 " style={{backgroundColor:'#f0f2f5'}}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="icons-container d-flex">
                <div className="icon">
                  <i class="fa-brands fa-whatsapp "></i>
                </div>
                <div className="icon">
                  <i class="fa-brands fa-facebook "></i>
                </div>
                <div className="icon">
                  <i class="fa-brands fa-linkedin-in "></i>
                </div>
                <div className="icon">
                  <i class="fa-brands fa-twitter "></i>{" "}
                </div>
              </div>
             <div> <img src={img} style={{ width: "150px" }} alt="" /></div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
