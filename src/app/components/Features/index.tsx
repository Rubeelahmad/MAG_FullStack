"use client";
import React, { useState } from "react";
import styles from "./Features.module.scss";
import Bgimg3 from "../images/bgimg3.png";
import Bgimg4 from "../images/bgimg4.png";
import Button from "../Button";
import FeaturesImages from "./FeaturesImages";
import Image from "next/image";
const Features = () => {
  const [activeFeatures, setActiveFeatures] = useState("effortless-interface");
 

  //Craousal-Sections to show Features
  const featuresList = [
    {
      id: 1,
      slug: "effortless-interface",
      title: "Effortless interface",
      subTitle: "Simplify your marketing",
    },
    {
      id: 2,
      slug: "seamless-connections",
      title: "Seamless connections",
      subTitle: "Total sync with your tools",
    },
    {
      id: 3,
      slug: "tailored-experience",
      title: "Tailored experience",
      subTitle: "Customise with ease",
    },
    {
      id: 4,
      slug: "all-in-one-platform",
      title: "All-in-One platform",
      subTitle: "Unified marketing mastery",
    },
    {
      id: 5,
      slug: "smart-insights",
      title: "Smart insights",
      subTitle: "AI-powered marketing intelligence",
    },
  ];

  //const handelFeatures = () => {};

  return (
    <div className={`featureTextWrap ${styles.wrapBox}`}>
      <Image src={Bgimg3} className={styles.bgimg3} alt="" />
      <Image src={Bgimg4} className={styles.bgimg4} alt="" />
      <div className={styles.gridbox}>
        <div className={`${styles.col} ${styles.featureText}`}>
          <h2>FlowSpark features</h2>
          <ul>
            {featuresList.map((item, index) => {
              return (
                <li
                  className={item.slug === activeFeatures ? styles.active : ""}
                  key={index}
                  onClick={() => setActiveFeatures(item.slug)}
                >
                  <h3>{item.title}</h3> <p>{item.subTitle}</p>
                </li>
              );
            })}
          </ul>
          <p>
            Experience simplicity with our user-friendly interface, designed for
            effortless navigation. Transform complex tasks into simple actions,
            enhancing productivity and strategic focus. Enjoy a seamless
            experience that drives results and optimizes your marketing efforts
            efficiently.
          </p>
          <div>
            <Button
              btntext="See more features"
              btntype="primary"
              btnAction={() => false}
            />
          </div>
        </div>
        <div className={styles.col}>
          <FeaturesImages selectedFeature={activeFeatures} />
        </div>
      </div>
    </div>
  );
};

export default Features;
