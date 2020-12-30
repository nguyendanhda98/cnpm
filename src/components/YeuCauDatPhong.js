import React from "react";
import axios from "axios";
import Phong from "./Phong";

class YeuCauDatPhong extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phong: [] };

    let timkiem = async (event) => {
      var data = localStorage.getItem("email");
      const res = await axios.get(
        `http://localhost:3030/phong?emailchu=${data}`
      );
      const x = res.data.data; //mang
      if (x.length === 0) {
        this.setState({ phongs: "Hiện tại chưa có phòng ở đây" });
      } else {
        let a = x.filter((b) => b.emailkhach !== "");
        let s = a.filter((b) => b.emailkhach !== "an");
        const z = s.map((y) => {
          let khach = y.emailkhach;
          let khach1 = y.emailkhach;

          if (khach === "") {
            khach = "Ẩn";
          } else {
            khach = "Hiện";
          }
          return (
            <div key={y._id}>
              <Phong phong={y} />
              <div>Khách hàng: {khach1}</div>
              <input
                id={y._id}
                className="btn btn-primary"
                name={y._id}
                onClick={this.anhien}
                type="submit"
                value="Chấp nhận"
              />

              <button id={y._id} className="btn btn-primary" onClick={this.xoa}>
                Huỷ yêu cầu
              </button>
            </div>
          );
        });
        this.setState({ phong: z });
      }
    };
    timkiem();
  }

  huyyeucau = (e) => {
    let id = e.target.id;
    let url = `http://localhost:3030/phong/${id}`;
    let data = { emailkhach: "" };
    axios.patch(url, data);
    alert("Huỷ thành công");
    window.location.replace("/QuanLyPhong");
  };

  anhien = async (e) => {
    let id = e.target.id;
    let url = `http://localhost:3030/phong/${id}`;
    let dulieu = await axios.get(url);
    let emailkhach = dulieu.data.emailkhach;
    let data = { emailkhach: "an", emailthue: emailkhach };
    axios.patch(url, data);
    alert("Chấp nhận yêu cầu thành công");
    window.location.replace("/YeuCauDatPhong");
  };

  xoa = (e) => {
    let id = e.target.id;
    let url = `http://localhost:3030/phong/${id}`;
    let data = { emailkhach: "" };
    axios.patch(url, data);
    alert("Huỷ yêu cầu thành công");
    window.location.replace("/YeuCauDatPhong");
  };

  render() {
    return (
      // phong
      <div className="row">{this.state.phong}</div>
    );
  }
}

export default YeuCauDatPhong;
