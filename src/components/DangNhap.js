import React from "react";
import axios from "axios";

class DangNhap extends React.Component {
  dangnhap = async (e) => {
    e.preventDefault();
    const email = document.getElementById("exampleInputEmail1").value;
    const matkhau = document.getElementById("exampleInputPassword1").value;
    if (email === "" || matkhau === "") {
      e.preventDefault();
      alert("Email và Mật khẩu không được để trống");
    } else {
      let dulieu = await axios.get(
        `http://localhost:3030/taikhoan?email=${email}`
      );
      let x = dulieu.data.data; //mang
      for (let i of x ) {
      var emailCheck = i.email;
      var matkhauCheck = i.matkhau;
      var ten = i.ten;
      var id = i._id
      }
      if (email === emailCheck && matkhau === matkhauCheck) {
        alert("Đăng nhập thành công");
        localStorage.setItem("email", email);
        localStorage.setItem("ten", ten);
        localStorage.setItem("id", id)
        
        window.location.replace("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
      }

    }
  };

  render() {
    return (
      <form onSubmit={this.dangnhap}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nhập email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Mật khẩu"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng nhập
        </button>
      </form>
    );
  }
}

export default DangNhap;
