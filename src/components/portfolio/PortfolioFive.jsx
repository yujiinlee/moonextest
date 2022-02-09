import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import {
  portfolioContent,
  portfolioMenu,
} from './portfolio-data';

const PortfolioFive = () => {
  const fallbackLinkTo = '/works-showcase';

  return (
    <>
      <Tabs>
        <div className="row">
          <div className="col-lg-7">
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <h2 className="text-uppercase fw-semibold">
                Latest <br />
                Projects
              </h2>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-5">
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{
                "--ptf-xxl": " 0.625rem",
                "--ptf-lg": "1.875rem",
              }}
            ></div>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <TabList className="ptf-filters ptf-filters--style-4">
                {portfolioMenu.map((item, i) => (
                  <Tab className="filter-item filter-item-active" key={i}>
                    {item}
                  </Tab>
                ))}
              </TabList>
            </div>
          </div>
          {/* End .col */}

          {/* <!--Spacer--> */}
          <div
            className="ptf-spacer"
            style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
          ></div>
        </div>
        {/* End .container */}

        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
            {/* {/* <!--Animated Block--> */}

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
                {item.tabContent.map((singleItem, i) => (
                  <div className="col-lg-6" key={i}>
                    <article className="ptf-work ptf-work--style-1">
                      <div className="ptf-work__media">
                        <Link
                          className="ptf-work__link"
                          to={singleItem.to || fallbackLinkTo}
                        ></Link>
                        <img
                          src={`assets/img/portfolio/${singleItem.img}.png`}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-work__meta">
                        <div className="ptf-work__category">
                          {singleItem.meta}
                        </div>
                        <h4 className="ptf-work__title">
                          <Link
                            to={singleItem.to || fallbackLinkTo}
                          > {singleItem.title}</Link>
                        </h4>
                      </div>
                    </article>
                  </div>
                ))}
                {/* End .col */}
              </div>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default PortfolioFive;
