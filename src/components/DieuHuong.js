import React from "react";
import "../css/bootstrap.min.css";
import { Link } from "react-router-dom";

class DieuHuong extends React.Component {
  state = { ten: this.props.user, loai: localStorage.getItem("loai") };

  dangxuat = (e) => {
    e.preventDefault();
    alert("Đăng xuất thành công");
    localStorage.removeItem("email");
    localStorage.removeItem("ten");
    localStorage.removeItem("loai");
    window.location.replace("/");
  };

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
            <Link
              style={{
                display: this.state.loai === "chunha" ? "block" : "none",
              }}
              className="nav-item nav-link"
              to="/chunha"
            >
              Cho thuê phòng
            </Link>
            <Link
              style={{ display: this.state.ten ? "none" : "block" }}
              className="nav-item nav-link"
              to="/dangnhap"
            >
              Đăng nhập
            </Link>
            <Link
              style={{ display: this.state.ten ? "none" : "block" }}
              className="nav-item nav-link"
              to="/dangky"
            >
              Đăng Ký
            </Link>
            <Link
              style={{ display: this.state.ten ? "block" : "none" }}
              className="nav-item nav-link"
              to="/ThongTinCaNhan"
            >
              Thông tin cá nhân
            </Link>
            <Link
              style={{ display: this.state.ten ? "block" : "none" }}
              className="nav-item nav-link"
              to="/PhongDaDat"
            >
              Phòng đã yêu cầu
            </Link>
            <Link
              style={{
                display: this.state.loai === "chunha" ? "block" : "none",
              }}
              className="nav-item nav-link"
              to="/PhongDaChoThue"
            >
              Phòng đã cho thuê
            </Link>
            <Link
              style={{
                display: this.state.loai === "chunha" ? "block" : "none",
              }}
              className="nav-item nav-link"
              to="/YeuCauDatPhong"
            >
              Yêu cầu đặt phòng
            </Link>
            <Link
              style={{
                display: this.state.loai === "chunha" ? "block" : "none",
              }}
              className="nav-item nav-link"
              to="/QuanLyPhong"
            >
              Quản lý phòng
            </Link>
            <Link
              style={{ display: this.state.ten ? "block" : "none" }}
              className="nav-item nav-link"
              to="#"
              onClick={this.dangxuat}
            >
              Đăng Xuất
            </Link>
            <Link
              style={{ display: "none" }}
              className="nav-item nav-link"
              to="/Admin"
            >
              Admin
            </Link>
            <p
              style={{ display: this.state.ten ? "block" : "none" }}
              className="nav-item nav-link"
            >
              Xin chào {this.state.ten}
            </p>
          </div>
        </div>
      </nav>
    );
  }
}

export default DieuHuong;
