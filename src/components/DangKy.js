import React from "react";

class DangKy extends React.Component {
  render() {
    return (
      <form action="http://localhost:3030/taikhoan" method="POST">
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

        <button type="submit" className="btn btn-primary">
          Đăng ký
        </button>
      </form>
    );
  }
}

export default DangKy;
