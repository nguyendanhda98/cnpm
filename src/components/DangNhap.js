import React from "react";

class DangNhap extends React.Component {
  render() {
    return (
      <form>
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
