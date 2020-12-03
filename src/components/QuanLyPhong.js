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
          return (
            <div key={y._id}>
              <Phong phong={y} />
              <button
                id={y._id}
                className="btn btn-primary"
                name={y._id}
                onClick={this.anhien}
              >
                Ẩn
              </button>
              <button id={y._id} className="btn btn-primary" onClick={this.xoa}>
                Xoá
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

  anhien = (e) => {
    let id = e.target.id;
    let url = `http://localhost:3030/phong/${id}`;
    let data = { emailkhach: "an" };
    axios.patch(url, data);
    let val = document.getElementsByName(id).value;
    console.log(val);
    
  }
  xoa = (e) => {
    let id = e.target.id;
    let url = `http://localhost:3030/phong/${id}`;
    axios.delete(url);
    alert("Xoá thành công");
    window.location.replace("/QuanLyPhong");
  }

  render() {
    return (
      <div>{this.state.phong}</div>
      // <div>
      //   <div className="card" style={{ width: "18rem" }}>
      //     <img src="../logo192.png" className="card-img-top" alt="..." />
      //     <div className="card-body">
      //       <h5 className="card-title">Cầu Giấy</h5>
      //       <p className="card-text">1,2 triệu/tháng</p>
      //       <a href="/chitiet" className="btn btn-primary">
      //         Chi tiết
      //       </a>
      //       <a href="/chitiet" className="btn btn-primary">
      //         Ẩn
      //       </a>
      //       <a href="/chitiet" className="btn btn-primary">
      //         Xoá
      //       </a>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default QuanLyPhong;
