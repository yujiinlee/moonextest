import React from "react";

const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "COMPANY/TEAM",
        subTitle1: `Woowa Bros,
                `,
        subTitle2: "Japan Product Team",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "CATEGORY",
        subTitle1: `UI/UX`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "CO-WORK",
        subTitle1: `4 UI/UX Designers
                `,
        subTitle2: "",
        subTitle3: "",
      },
      {
        dealyAnimation: "400",
        title: "DATE",
        subTitle1: `September, 2021 ~`,
        subTitle2: "March, 2022",
        subTitle3: "",
      },
    ],
  },
];

const WorksCaseStudy = () => {
  return (
    <>
      {caseStudyContent.map((val, i) => (
        <div className="col-xl-3" key={i}>
          {/* <!--Spacer--> */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
          {/* <!--Animated Block--> */}
          {val.caseContent.map((item, i) => (
            <div key={i}>
              <div
                className="ptf-animated-block mb-70"
                data-aos="fade"
                data-aos-delay={item.dealyAnimation}
              >
                <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                  {item.title}
                </h5>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.25rem" }}
                ></div>
                <p className="fz-20 lh-1p5 has-black-color">
                  {item.subTitle1} <br />
                  {item.subTitle2} <br />
                  {item.subTitle3}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": " 4.375rem",
                  "--ptf-md": "2.1875rem",
                }}
              ></div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default WorksCaseStudy;
