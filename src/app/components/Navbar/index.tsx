"use client";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import ThemeToggle from "./ThemeToggle";
import Support from "./images/Support";
import ChatIcon from "./images/ChatIcon";
import ArrowDown from "./images/ArrowDown";
import UserCircle from "./images/UserCircle";
import logoImg from "./images/logo.png";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import GlobeAlt from "./images/GlobeAlt";
import BookACallModal from "../Modal";
import { useModal } from "@/app/context/ModalManager";

const Navbar = () => {
  const {openModal} = useModal()

  const handleFreeTrial = () => {};
  return (
    <>
      <div className={styles.wrapBox}>
        <div className={styles.topNav}>
          <div className={`topNavLeft ${styles.left}`}>
            <ul>
              <li>
                <GlobeAlt />
                En <ArrowDown />
              </li>
              <li>
                <ChatIcon /> <span>Chat to sales</span>
              </li>
              <li>
                <Support />
                <span>Support</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.themeMode}>
              <ThemeToggle />
            </div>
            <button>
              <UserCircle />
              Log in
            </button>
          </div>
        </div>
        <div className={styles.bottomNav}>
          <div className="container">
            <div className={`mainNav ${styles.navbar}`}>
              <div className={styles.navLeft}>
                <Link href="#">
                  <Image src={logoImg} alt="" width={170} height={32} />
                </Link>
                <ul className={styles.navs}>
                  <li>
                    <Link href="#">Features</Link>
                  </li>
                  <li>
                    <Link href="#">Industries</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#">Resources</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.navRight}>
                <Button
                  btntext="Schedule a call"
                  btntype={"primary"}
                  btnAction={openModal}
                />
                <Button
                  btntext="Free Trial"
                  btntype={"secondary"}
                  btnAction={handleFreeTrial}
                />
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </>
  );
};

export default Navbar;
