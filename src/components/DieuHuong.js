import React from "react";
import "../css/bootstrap.min.css";
import { Link } from "react-router-dom";

class DieuHuong extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Hệ thống thuê và cho thuê phòng
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/chunha">
              Cho thuê phòng
            </Link>
            <Link className="nav-item nav-link" to="/dangnhap">
              Đăng nhập
            </Link>
            <Link className="nav-item nav-link" to="/dangky">
              Đăng Ký
            </Link>
            <Link className="nav-item nav-link" to="/ThongTinCaNhan">
              Thông tin cá nhân
            </Link>
            <Link className="nav-item nav-link" to="/PhongDaDat">
              Phòng đã yêu cầu
            </Link>
            <Link className="nav-item nav-link" to="/PhongDaChoThue">
              Phòng đã cho thuê
            </Link>
            <Link className="nav-item nav-link" to="/YeuCauDatPhong">
              Yêu cầu đặt phòng
            </Link>
            <Link className="nav-item nav-link" to="/QuanLyPhong">
              Quản lý phòng
            </Link>
            <Link className="nav-item nav-link" to="/Admin">
              Admin
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default DieuHuong;
