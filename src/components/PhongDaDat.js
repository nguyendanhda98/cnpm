import React, { Component } from "react";
import axios from "axios";
import Phong from "./Phong";

class PhongDaDat extends Component {
  constructor(props) {
    super(props);
    this.state = { phong: [] };

    let timkiem = async (event) => {
      var data = localStorage.getItem("email");
      const res = await axios.get(
        `http://localhost:3030/phong?emailkhach=${data}`
      );
      const x = res.data.data; //mang
      if (x.length === 0) {
        this.setState({ phongs: "Hiện tại chưa có phòng ở đây" });
      } else {
        const z = x.map((y) => {
          return (
            <div key={y._id}>
              <Phong phong={y} />
              <button
                id={y._id}
                className="btn btn-primary"
                onClick={this.huyyeucau}
              >
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
    window.location.replace("/PhongDaDat");
  };

  render() {
    return (
      <div>
        {this.state.phong}
        {/* <div className="card" style={{ width: "18rem" }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cầu Giấy</h5>
            <p className="card-text">1,2 triệu/tháng</p>
            <a href="/chitiet" className="btn btn-primary">
              Chi tiết
            </a>
            <a href="/huyphong" className="btn btn-primary">
              Huỷ yêu cầu
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default PhongDaDat;
