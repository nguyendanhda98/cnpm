import React from "react";
import axios from "axios";

class TaiKhoan extends React.Component {
  xoa = (e) => {
    // e.preventDefault();
    let id = this.props.taikhoan._id;
    let url = `http://localhost:3030/taikhoan/${id}`;
    axios.delete(url);
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <input
              type="text"
              name="email"
              defaultValue={this.props.taikhoan.email}
              disabled
            />
            <input
              type="text"
              name="matkhau"
              defaultValue={this.props.taikhoan.matkhau}
              disabled
            />
            <input type="submit" value="Xoá" onClick={this.xoa} />
          </form>
        </div>
      </div>
    );
  }
}

export default TaiKhoan;
