"use client";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Button from "../Button";
import LogiImg from "../Navbar/images/logo.png";
import Image from "next/image";
import Instagram from "./images/Instagram";
import Youtube from "./images/Youtube";
import Facebook from "./images/Facebook";
import Ttwitter from "./images/Twitter";
import Linkedin from "./images/Linkedin";
import { useModal } from "@/app/context/ModalManager";

const Footer = () => {
  const {openModal} = useModal()

  return (
    <div className={styles.wrapBox}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.gridbox}>
            <div className={styles.col}>
              <h4>Product</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">Overview</Link>
                </li>
                <li>
                  <Link href="#">Key Features</Link>
                </li>
                <li>
                  <Link href="#">Integrations</Link>
                </li>
                <li>
                  <Link href="#">Customisation Options</Link>
                </li>
                <li>
                  <Link href="#">AI-led Insights</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Academy</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">Training programme</Link>
                </li>
                <li>
                  <Link href="#">Webinars</Link>
                </li>
                <li>
                  <Link href="#">Education blog</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <h4>Support</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">Support Center</Link>
                </li>
                <li>
                  <Link href="#">Account login</Link>
                </li>
              </ul>
              <Button
                btntext="Schedule a call"
                btntype={"primary"}
                btnAction={openModal}
              />
            </div>
            <div className={styles.col}>
              <h4>Company</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="#">Partnerships</Link>
                </li>
                <li>
                  <Link href="#">Media + Press</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <Link href={"#"}>
              <Image src={LogiImg} alt="" />
            </Link>
            <ul>
              <li>
                <Link href={"#"} target="_blank">
                  <Ttwitter />
                </Link>
              </li>
              <li>
                <Link href={"#"} target="_blank">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href={"#"} target="_blank">
                  <Linkedin />
                </Link>
              </li>
              <li>
                <Link href={"#"} target="_blank">
                  <Youtube />
                </Link>
              </li>
              <li>
                <Link href={"#"} target="_blank">
                  <Facebook />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.termsLink}>
            <ul>
              <li>
                <Link href={"#"}>Terms of service </Link>
              </li>
              <li>
                <Link href={"#"}>Privacy policy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.copyright}>
            <p>2024 flowSpark Digital LLC</p>
          </div>
        </div>
      </div>
    </div>
	
  );
};

export default Footer;
