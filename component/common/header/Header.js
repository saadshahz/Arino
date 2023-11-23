"use client";
import Image from "next/image";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "@/public/images/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navber">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="head-logo">
                <Image src={logo} />
              </div>
            </div>
            <div className="col-md-8">
              <div className="head-nav">
                <nav>
                  <ul>
                    <li>
                      {" "}
                      <Link href={"#"}>HOME</Link>{" "}
                    </li>
                    <li>
                      <Link href={"#"}>ABOUT</Link>
                    </li>
                    <li>
                      <Link href={"#"}>SERVICE</Link>
                    </li>
                    <li>
                      <Link href={"#"}>PORTFOLIO</Link>
                    </li>
                    <li>
                      <NavDropdown title="BLOG" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          <Link href={"#"}>Action</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          <Link href={"#"}>Another action</Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>

                    <li>
                      <Link href={"#"}>CONTACT</Link>
                    </li>
                    <li>
                      <Link href={"#"}>TEAM</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-2">
              <div className="head-menu">
                <button>
                  <BiMenuAltLeft />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
