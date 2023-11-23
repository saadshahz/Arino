import Image from "next/image";
import logo from "@/public/images/logo.svg";
import { LiaLinkedinIn } from "react-icons/lia";
import { BsSendFill } from "react-icons/bs";
import { FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import {} from "react-icons/fa";
import Link from "next/link";
import FoooterBottom from "./FoooterBottom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="foo-desc">
                <Image src={logo} />

                <p>
                  Welcome to arino sed ut perspiciae omunde omnis iste natus
                  error sitort voluptatem accusantium.
                </p>
                <div className="foo-desc-icon">
                  <Link href={"#"}>
                    <LiaLinkedinIn />
                  </Link>
                  <Link href={"#"}>
                    <FaYoutube />
                  </Link>
                  <Link href={"#"}>
                    <FaXTwitter />
                  </Link>
                  <Link href={"#"}>
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="foo-service">
                <h4>Services</h4>
                <ul>
                  <li><Link href={"#"}>UI/UX design</Link> </li>
                  <li><Link href={"#"}>WP development</Link> </li>
                  <li><Link href={"#"}>Digital marketing</Link> </li>
                  <li><Link href={"#"}>React development</Link> </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="foo-contact">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <Link href={"#"}>12345678952</Link>
                  </li>
                  <li>
                    <Link href={"#"}>admin@gamil.com</Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      50 Wall Street Suite, 44150 Ohio, United States
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="foo-sub">
                <h4>Subscribe</h4>
                <form>
                  <input type="email" id="email" />
                  <label>
                    <button>
                      <BsSendFill />
                    </button>
                  </label>
                </form>
                <p>
                  At vero eos et accusamus et iusto odio as part dignissimos
                  ducimus qui blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FoooterBottom />
    </>
  );
}
