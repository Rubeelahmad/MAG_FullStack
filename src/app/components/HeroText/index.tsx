"use client";
import React from "react";
import styles from "./HeroText.module.scss";
import Bgimg5 from "../images/bgimg5.png";
import Button from "../Button";
import Image from "next/image";


const HeroText = () => {
  return (
    <div className={styles.wrapBox}>
      <Image src={Bgimg5} className={styles.bgimg5} alt="" />
      <h2>Want to see how we can help?</h2>
      <p>
        Ready to transform your marketing? Book a demo or start your free trial
        today and see firsthand how we can make your marketing efforts more
        effective and enjoyable!
      </p>
      <div className={styles.buttonGrop}>
        <Button
          btntext="Schedule a call"
          btntype={"primary"}
          btnAction={() => false}
        />
        <Button
          btntext="Free Trial"
          btntype={"secondary"}
          btnAction={() => false}
        />
      </div>
      <div className={styles.formNote}>Free 14-day trial. Cancel anytime.</div>
    </div>
  );
};

export default HeroText;
