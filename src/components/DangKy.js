import React from "react";
import axios from "axios";

class DangKy extends React.Component {
  dangky = async (e) => {
    e.preventDefault();
    const ten = document.getElementById("name").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const sdt = document.getElementById("sdt").value;
    const matkhau1 = document.getElementById("exampleInputPassword1").value;
    const matkhau2 = document.getElementById("exampleInputPassword2").value;
    const loai = document.getElementById("loaitaikhoan").value;
    if (
      ten === "" ||
      email === "" ||
      sdt === "" ||
      matkhau1 === "" ||
      matkhau2 === ""
    ) {
      e.preventDefault();
      alert("Bạn cần điền đầy đủ thông tin!");
    } else if (matkhau1 !== matkhau2) {
      e.preventDefault();
      alert("Mật khẩu không trùng khớp!");
    } else {
      let dulieu = await axios.get(
        `http://localhost:3030/taikhoan?email=${email}`
      );
      let x = dulieu.data.data; //mang
      for (let i of x) {
        var emailCheck = i.email;
      }
      if (email === emailCheck) {
        alert("Email đã được sử dụng");
      } else {
        axios.post("http://localhost:3030/taikhoan", {
          ten: ten,
          email: email,
          sdt: sdt,
          matkhau: matkhau1,
          loai: loai,
        });
        alert("Đăng Ký Thành Công");
        this.props.history.push("/dangnhap");
        // window.location.replace("/dangnhap");
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.dangky}>
        <div className="form-group">
          <label htmlFor="name">Họ và Tên</label>
          <input
            type="text"
            className="form-control"
            name="ten"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Nhập tên đầy đủ"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nhập email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sdt">Số điện thoại</label>
          <input
            type="number"
            name="sdt"
            className="form-control"
            id="sdt"
            aria-describedby="emailHelp"
            placeholder="Nhập số điện thoại"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mật khẩu</label>
          <input
            type="password"
            name="matkhau"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Mật khẩu"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">Xác nhận mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Xác nhận mật khẩu"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loaitaikhoan">Loại tài khoản</label>
          <select name="loaitaikhoan" id="loaitaikhoan">
            <option value="khachhang">Khách hàng</option>
            <option value="chunha">Chủ nhà</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng ký
        </button>
      </form>
    );
  }
}

export default DangKy;
