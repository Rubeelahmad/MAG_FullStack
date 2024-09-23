import React from "react";
import styles from "./Hero.module.scss";
import heroImg from "./images/heroImg.png";
import Bgimg1 from "../images/bgimg1.png";
import Bgimg2 from "../images/bgimg2.png";
import Image from "next/image";
import BookSchedule from "./BookSchedule";


const Hero = () => {
  return (
    <div className={styles.wrapBox}>
      <Image src={Bgimg1} className={styles.bgimg1} alt="" />
      <Image src={Bgimg2} className={styles.bgimg2} alt="" />
      <div className={styles.gridbox}>
        <div className={styles.heroText}>
          <h1>FlowSpark</h1>
          <h4>DIGITAL MARKETING SOLUTIONS</h4>
          <p>
            We believe that marketing shouldn’t be a headache, so we’ve crafted
            a platform that’s super easy to use but doesn’t skimp on the
            powerful stuff.
          </p>
          <Image src={heroImg} alt="" />
        </div>
        <div className={styles.heroForm}>
          <BookSchedule />
        </div>
      </div>
    </div>
  );
};

export default Hero;
