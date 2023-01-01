import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderStudio from "../../components/header/HeaderStudio";
import Award from "../../components/award/Award";
import Blog from "../../components/blog/Blog";
import FooterThree from "../../components/footer/FooterThree";
import CopyRightThree from "../../components/footer/copyright/CopyRightThree";
import ContactJarallax from "../../components/jarallax/ContactJarallax";
import PortfolioFive from "../../components/portfolio/PortfolioFive";
import heroimg from "../../assets/img/root/toptext.svg"
import line1 from "../../assets/img/root/line1.svg"
import line2 from "../../assets/img/root/line2.svg"
import line3 from "../../assets/img/root/line3.svg"
import line4 from "../../assets/img/root/line4.svg"
import line5 from "../../assets/img/root/line5.svg"
import stroke from "../../assets/img/root/stroke.svg"

const HomeStudio = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-studio">
      <Helmet>
        <title>Yujin Lee</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="top">

        <HeaderStudio />
        {/* End Header Agency */}

        <div className="ptf-site-wrapper__inner">
          <div className="ptf-main">
            <div className="ptf-page ptf-page--home-studio">
              {/*=============================================
              Start Service Section 
              ============================================== */}
              <section>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
                ></div>
                <div className="container-xxl">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >                  
                  </div>
                  {/* End <!--Animated Block--> */}

                  {/* <!--Spacer--> */}
                  {/* <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                  ></div> */}

                  {/* <!--Animated Block--> */}
                  <div>
                    <div className="text">
                      <img class="heroimg" src={line1}></img>
                    </div>
                    <img class="stroke" src={stroke}></img>
                      <div className="text">
                        <img class="heroimg" src={line2}></img>
                      </div>
                      <img class="stroke" src={stroke}></img>
                      <div className="text">
                        <img class="heroimg" src={line3}></img>
                      </div>
                      <img class="stroke" src={stroke}></img>
                      <div className="text">
                        <img class="heroimg" src={line4}></img>
                      </div>
                      <img class="stroke" src={stroke}></img>
                      <div className="text">
                        <img class="heroimg" src={line5}></img>
                      </div>
                      
                    {/* <img class="heroimg" src={heroimg}></img> */}
                  </div>
                </div>

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
              ></div>
            </section>

            {/*=============================================
            Start Service Section 
            ============================================== */}
            <section>
              <div className="container-xxl">
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5 d-inline-flex">Latest Work</h2>
                  <Link
                    className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                    to="/works-grid"
                    style={{ marginLeft: "3.125rem" }}
                  >
                    All Projects <i className="lnil lnil-chevron-right"></i>
                  </Link>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <PortfolioFive/>
                  </div>
                </div>
              </div>
            </section>

            {/*=============================================
            Start Award Section 
            ============================================== */}
            <section className="ptf-custom--1562">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5">Moonex’s Awards</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container-xxl">
                <Award />
              </div>
            </section>

            {/*=============================================
            Start Blog Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h5 d-inline-flex">The World of Moonex</h2>
                  <a
                    className="ptf-link-with-arrow fz-14 d-none d-lg-inline-flex"
                    href="blog-grid.html"
                    style={{ marginLeft: "3.125rem" }}
                  >
                    All Articles <i className="lnil lnil-chevron-right"></i>
                  </a>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="row ptf-isotope-grid"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <Blog />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
            Start Contact Section 
            ============================================== */}
            <section
              className="jarallax jarallax-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  "assets/img/services-call-to-action-background.png"
                })`,
              }}
            >
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
              <ContactJarallax />
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>  

      {/*=============================================
        Start Footer Section 
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-2">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterThree />
          </div>
          {/* End .ptf-footer__top */}

          <div className="ptf-footer__bottom">
            <CopyRightThree />
          </div>
          {/* End .ptf-footer__bottom */}
        </div>
      </footer>
    </div>
  );
};

export default HomeStudio;
