import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function TeamMember(props) {
  const { img, name, jobTitle } = { ...props };
  return (
    <div className="team-member">
      <div className="member-icons">
        <span>
          <Link href={"#"}>
            <FaFacebookF />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <FaLinkedinIn />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <BsTwitterX />
          </Link>
        </span>
        <span>
          <Link href={"#"}>
            <FaInstagram />
          </Link>
        </span>
      </div>
      <div className="member-image">
        <Image src={img} alt="Team Member" />
      </div>
      <div className="member-text">
        <h5>{name}</h5>
        <h6>{jobTitle}</h6>
      </div>
    </div>
  );
}
