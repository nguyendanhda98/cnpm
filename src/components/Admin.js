import React, { Component } from "react";
import axios from "axios";
import TaiKhoan from "./TaiKhoan";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { taikhoan: [] };

    let dulieu = async () => {
      let res1 = await axios.get(`http://localhost:3030/taikhoan`);
      let x = res1.data.data; //mang
      if (x.length === 0) {
        this.setState({ taikhoan: "Không tồn tại dữ liệu!" });
      } else {
        const tk = x.map((acc) => {
          return (
            <div key={acc._id}>
              <TaiKhoan taikhoan={acc} />
            </div>
          );
        });
        this.setState({ taikhoan: tk });
      }
    };
    dulieu();
  }

  timkiem = async (e) => {
    e.preventDefault();
    let emailcantim = document.getElementById("emailcantim").value;
    var res = "";
    if (emailcantim === "") {
      res = await axios.get(`http://localhost:3030/taikhoan`);
    } else {
      res = await axios.get(
        `http://localhost:3030/taikhoan?email=${emailcantim}`
      );
    }
    let x = res.data.data;
    if (x.length === 0) {
      this.setState({ taikhoan: "Không tồn tại dữ liệu!" });
    } else {
      const tk = x.map((acc) => {
        return (
          <div key={acc._id}>
            <TaiKhoan taikhoan={acc} />
          </div>
        );
      });
      this.setState({ taikhoan: tk });
    }
  };

  render() {
    return (
      <div>
        <div>
          <input id="emailcantim" type="text" name="email" />
          <input type="submit" value="Tìm kiếm" onClick={this.timkiem} />
          <div>Email Mật khẩu</div>
          <div>{this.state.taikhoan}</div>
        </div>
      </div>
    );
  }
}

export default Admin;
