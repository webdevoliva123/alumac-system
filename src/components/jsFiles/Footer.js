import React from "react";
import "../cssFiles/footer.css";
import PreFooter from "./PreFooter";
import CustomButton from "./CustomButton";
import PreFooter2 from "./PreFooter2";
import PreFooter3 from "./PreFooter3";

const Footer = ({ data }) => {
  return (
    <>
      <div className="preFooter1Container">
        <div className="preFooter1">
          <div className="footerAbout preFooter1section">
            <p className="footerTitle">Short About Our Comapny </p>
            <article>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur nam rem cupiditate porro repellendus dicta nisi libero
              dolorum assumenda architecto voluptates, rerum saepe aspernatur
              aliquam quidem dolores temporibus repudiandae, est asperiores,
              quos error dolorem. Amet ad, laudantium veniam aperiam maxime
              libero quod delectus ducimus consequatur doloribus ex hic
              repellat.
            </article>
            <a href="/aboutUs">Read More</a>
          </div>
          <div className="preFooter1section">
            <p className="footerTitle">Products By Category </p>
            {data.sec1.map((e, i) => {
              return <PreFooter key={i} name={e.name} link={e.url} />;
            })}
          </div>
          <div className="preFooter1section">
            <div>
              <p className="footerTitle">Quik Links </p>
              {data.sec2.map((e, i) => {
                return <PreFooter key={i} name={e.name} link={e.url} />;
              })}
            </div>
          </div>
          <div className="preFooter1section">
            <span className="conatact-span">
              Contact With us. <br />
              (24/7 customer services)
            </span>
            <div className="contactButton">
              <CustomButton
                Data={"Contact us"}
                link={`/contact`}
                border={"border"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="preFooter3Container">
        <PreFooter3 />
      </div>
      <div className="preFooter2Container">
        <PreFooter2 />
      </div>
    </>
  );
};

export default Footer;
