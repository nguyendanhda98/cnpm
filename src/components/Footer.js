/** @format */

import React from "react";
import "./footer.css";
import { Link, useHistory } from "react-router-dom";

function Footer(props) {
  return (
    <div>
      <footer
        className="bg-dark"
        style={{ color: "white", paddingBottom: "20px" }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4">
              <h5 className="mt-3">
                <span style={{ color: "#fe4e00" }}>
                  {" "}
                  Hệ thống thuê và cho thuê phòng trọ TDT
                </span>
              </h5>
              <div>
                <p className="c-gray">
                  Nhà tiện nghi, giá hợp lí. Tìm và cho thuê nhà dễ dàng hơn.
                  Hãy đến với Hệ thống thuê và cho thuê phòng trọ TDT Miễn phí!
                  Giá cho sinh viên. Thuê nhanh chóng. Mua dễ dàng. Uy tín, chất
                  lượng.
                </p>
              </div>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2">
              <h5 className="font-weight-bold text-uppercase mt-3 c-gray">
                Thông tin
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a className="c-gray">Giới thiệu</a>
                </li>
                <li>
                  <a className="c-gray">Liên hệ</a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-2 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 c-gray">
                Hỗ trợ
              </h5>

              <ul className="list-unstyled">
                <li>
                  <Link className="c-gray">Hỗ trợ</Link>
                </li>
                <li>
                  <Link className="c-gray">Đóng góp</Link>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-4 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 c-gray">
                Theo dõi chúng tôi
              </h5>
              <ul className="list-unstyled">
                <li>
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-fb mx-1">
                        <i className="fab fa-facebook-f"> </i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-tw mx-1 b-youtube">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-gplus mx-1 b-google">
                        <i className="fab fa-google-plus-g"> </i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link className="btn-floating btn-li mx-1 b-instagram">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="footer-copyright text-center"
          style={{ paddingBottom: " 1rem !important" }}
        >
          <span className="c-gray">© 2020 Copyright:</span>

          <span style={{ color: "#fe4e00", fontWeight: "600" }}>
            {" "}
            Hệ thống thuê và cho thuê phòng trọ TDT
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
