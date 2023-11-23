import React from "react";
import Link from "next/link";

export default function FoooterBottom() {
  return (
    <div className="foo-bottom">
      <div className="container">
        <div className="foo-bottom-inner">
          <div className="row">
            <div className="col-md-6">
              <div className="foo-bottom-copyright">
                <p>Copyright © 2022 Laralink.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="foo-bottom-links">
                <ul>
                  <li>
                    <Link href={"#"}>Terms of Use</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
