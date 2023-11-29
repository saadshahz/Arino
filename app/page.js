"use client";
import Head from "next/head";
import Footer from "@/component/common/footer/Footer";
import Header from "@/component/common/header/Header";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { IoTriangle } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import SubcribeSideMenu from "@/component/common/header/SubcribeSideMenu";

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

      <section className="container">
        <div className="fun-fact">
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
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                  <div className="col-md-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
