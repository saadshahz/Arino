"use client";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

export default function SubcribeSideMenu(props) {
  return (
    <div className={`side-bar ${props.status ? "show" : "hide"}`}>
      <div className="side-bar-hide">
        <button onClick={props.handlehide}>
          <RxCrossCircled />
        </button>
      </div>
      <div className="container">
        <div className="col-md-12">
          <div className="side-bar-logo">
            <Image src={logo} />
          </div>
          <p>Do you have a project in your mind? Keep connect us.</p>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <Link href={"#"}>
                <FaPhoneAlt />
                +44 454 7800 112
              </Link>{" "}
            </li>
            <li>
              <Link href={"#"}>
                <MdEmail />
                infotech@arino.com
              </Link>{" "}
            </li>
            <li>
              <Link href={"#"}>
                <FaLocationDot /> 50 Wall Street Suite, 44150 Ohio, United
                States
              </Link>{" "}
            </li>
          </ul>
          <h4>Subscribe</h4>
          <form>
            <input type="text" id="subscribe" placeholder="example@gamil.com" />
            <label>Send</label>
          </form>
          <p>
            At vero eos et accusamus et iusto odio as part dignissimos ducimus
            qui blandit.
          </p>

          <div className="side-bar-icon">
            <ul>
              <li>
                <Link href={"#"}>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <FaXTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
