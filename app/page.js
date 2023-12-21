"use client";
import Head from "next/head";
import Footer from "@/component/common/footer/Footer";
import Header from "@/component/common/header/Header";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { IoTriangle, IoArrowForwardSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import digital from "@/public/images/digital.jpg";
import react from "@/public/images/react.jpg";
import uiux from "@/public/images/uiux.jpg";
import technology from "@/public/images/technology.webp";

import PortfolioSlider from "@/component/PortfolioSlider";
import { FaLongArrowAltRight } from "react-icons/fa";

import Image from "next/image";
import TeamMemberSlider from "@/component/team/TeamMemberSlider";

export default function Home() {
  return (
    <>
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="home-banner-title">
                <h1>Creativity In Our Blood Line</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className="title-shape-container">
                <div className="banner-title-shape">
                  <IoTriangle />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="home-banner-desc">
                <div className="row">
                  <div className="col-md-6">
                    <Link href={"#"}>
                      Get a Qoute
                      <BsArrowRight />
                    </Link>
                    <div className="banner-desc-shape">
                      <IoTriangle />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p>
                      We deliver best problem solving solution for our client
                      and provide finest finishing product in present and
                      upcoming future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-follow">
          <ul>
            <li>Follow Us</li>
            <li>
              <Link href={"#"}>Upwork</Link>
            </li>
            <li>
              <Link href={"#"}>Freelancer</Link>
            </li>
          </ul>
        </div>
        <div className="scroll-btn">
          <p>
            <Link href={"#"}>
              <span>
                <GoDotFill />
              </span>
            </Link>
          </p>
        </div>
      </section>

      <section className="fun-fact">
        <div className="container">
          <div className="fun-fact-inner">
            <div className="row">
              <div className="col-md-6">
                <div className="fun-fact-desc">
                  <h1>Our fun fact</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="fun-fact-counter">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="number-of-fact">
                        <h2>40K</h2>
                        <div>
                          <span>+</span>
                          <p>Global Happy Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="number-of-fact">
                        <h2>50K</h2>
                        <div>
                          <span>+</span>
                          <p>Project Completed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="number-of-fact">
                        <h2>245</h2>
                        <div>
                          <span>+</span>
                          <p>Team Members</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="number-of-fact">
                        <h2>550</h2>
                        <div>
                          <span>+</span>
                          <p>Digital products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="services-desc">
                <h3>What Can We Do</h3>
                <h2>Services we can help you with</h2>
                <button>
                  See All Services
                  <IoArrowForwardSharp />{" "}
                </button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="container">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-3">
                    <div className="services-image">
                      <Image src={digital} />
                      <p>Digital Marketing</p>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3">
                    <div className="services-image">
                      <Image src={react} />
                      <p>React Development</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="services-image">
                      <Image src={uiux} />
                      <p>UI/UX Design</p>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3">
                    <div className="services-image">
                      <Image src={technology} />
                      <p>Next Development</p>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-portfolio">
        <div className="home-portfolio-title">
          <h3>Latest Projects</h3>
          <h2>Portfolio to explore</h2>
        </div>
        <PortfolioSlider />
      </section>

      <section className="home-team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="home-team-title">
                <h3>Our Team</h3>
                <h2>Awesome Team Members</h2>
              </div>
            </div>
            <div className="col-md-12">
              <TeamMemberSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="anoucement-section">
        <marquee scrollamount="15">Our reputed world wide partners</marquee>
      </section>

      <section className="meeting">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="banner-title-shape">
                <IoTriangle />
              </div>

              <div className="meeting-inner-section">
                <h2>Lets disscuse make something cool together</h2>
                <Link href={"#"}>
                  Apply For Meeting
                  <FaLongArrowAltRight />
                </Link>
              </div>
              <div className="banner-desc-shape">
                <IoTriangle />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
