import React from "react";
import axios from "axios";
import Phong from "./Phong";

class QuanLyPhong extends React.Component {
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
        const z = x.map((y) => {
          let khach = y.emailkhach;
          if (khach === "") {
            khach = "Ẩn";
          } else {
            khach = "Hiện";
          }
          return (
            <div key={y._id}>
              <form key={y._id} action="/suaphong" method="GET">
                <Phong phong={y} />
                <input
                  id={y._id}
                  className="btn btn-primary"
                  name={y._id}
                  onClick={this.anhien}
                  type="submit"
                  value={khach}
                />

                <button
                  type="submit"
                  id={y._id}
                  className="btn btn-primary"
                  onClick={this.sua}
                >
                  Sửa
                </button>

                <button
                  id={y._id}
                  className="btn btn-primary"
                  onClick={this.xoa}
                >
                  Xoá
                </button>
                <input hidden name="_id" defaultValue={y._id}></input>
              </form>
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

  sua = (e) => {};

  anhien = (e) => {
    e.preventDefault();
    let id = e.target.id;
    let val = document.getElementById(id).value;
    let url = `http://localhost:3030/phong/${id}`;
    let data = { emailkhach: "an" };
    if (val === "Ẩn") {
      document.getElementById(id).value = "Hiện";
      data = { emailkhach: "an" };
    } else {
      document.getElementById(id).value = "Ẩn";
      data = { emailkhach: "" };
    }
    axios.patch(url, data);
  };

  xoa = (e) => {
    let id = e.target.id;
    let url = `http://localhost:3030/phong/${id}`;
    axios.delete(url);
    alert("Xoá thành công");
    window.location.replace("/QuanLyPhong");
  };

  render() {
    return <div className="row">{this.state.phong}</div>;
  }
}

export default QuanLyPhong;
