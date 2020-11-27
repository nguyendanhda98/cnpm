import React, { Component } from 'react'

class ThongTinCaNhan extends Component {
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
                />
              </div>

              <div className="form-group">
                <label htmlFor="sdt">Số điện thoại</label>
                <input
                  type="number"
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
                Lưu
              </button>
            </form>
          </div>
        );
    }
}

export default ThongTinCaNhan;