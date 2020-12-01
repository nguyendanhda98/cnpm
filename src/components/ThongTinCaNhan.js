import React, { Component } from "react";
import axios from "axios";

class ThongTinCaNhan extends Component {
  constructor(props) {
    super(props);
    this.state = { ten: "", email: "", sdt: "" };
    let laydulieu = async () => {
      let email = localStorage.getItem("email");
      let url = `http://localhost:3030/taikhoan?email=${email}`;
      let dulieu = await axios.get(url);
      let data = dulieu.data.data;
      this.setState({
        ten: data[0].ten,
        email: data[0].email,
        sdt: data[0].sdt,
      });
    };
    laydulieu();
  }

  luu = async (e) => {
    e.preventDefault();
    let matkhau2 = document.getElementById("exampleInputPassword1").value;
    let matkhau1 = document.getElementById("exampleInputPassword2").value;

    if (matkhau1 !== matkhau2) {
      alert("Mật khẩu không trùng khớp");
    } else {
      const id = localStorage.getItem("id");
      let url2 = `http://localhost:3030/taikhoan/${id}`;

      let ten2 = document.getElementById("name").value;
      let email2 = document.getElementById("exampleInputEmail1").value;
      let sdt2 = document.getElementById("sdt").value;
      let matkhau2 = document.getElementById("exampleInputPassword1").value;

      if (matkhau2 === "") {
        let data2 = {
          ten: ten2,
          email: email2,
          sdt: sdt2,
        };

        localStorage.setItem("email", email2);
        localStorage.setItem("ten", ten2);
        await axios.patch(url2, data2);
        alert("Đổi thông tin thành công");
      } else {
        let data3 = {
          ten: ten2,
          email: email2,
          sdt: sdt2,
          matkhau: matkhau2,
        };

        localStorage.setItem("email", email2);
        localStorage.setItem("ten", ten2);
        await axios.patch(url2, data3);
        alert("Đổi thông tin thành công");
      }
    }
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Họ và Tên</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Nhập tên đầy đủ"
              defaultValue={this.state.ten}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Nhập email"
              defaultValue={this.state.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sdt">Số điện thoại</label>
            <input
              defaultValue={this.state.sdt}
              type="number"
              className="form-control"
              id="sdt"
              aria-describedby="emailHelp"
              placeholder="Nhập số điện thoại"
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mật khẩu mới</label>
            <input
              type="password"
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

          <button type="submit" className="btn btn-primary" onClick={this.luu}>
            Lưu
          </button>
        </form>
      </div>
    );
  }
}

export default ThongTinCaNhan;
