import React from "react";

class QuanLyPhong extends React.Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cầu Giấy</h5>
            <p className="card-text">1,2 triệu/tháng</p>
            <a href="/chitiet" className="btn btn-primary">
              Chi tiết
            </a>
            <a href="/chitiet" className="btn btn-primary">
              Ẩn
            </a>
            <a href="/chitiet" className="btn btn-primary">
              Xoá
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default QuanLyPhong;
