import React from "react";
import axios from "axios";

class ChiTiet extends React.Component {
  constructor(props) {
    super(props);

    this.state = { diachi: "", giaphong: "", chitiet: "" };

    const chitiet = async () => {
      const id = this.props.location.search;
      const res = await axios.get(`http://localhost:3030/phong${id}`);
      const x = res.data.data; //mang
      x.map((y) => {
        return this.setState({
          diachi: y.diachi,
          giaphong: y.giaphong,
          chitiet: y.chitiet,
        });
      });
      console.log(x);
    };

    chitiet();
  }

  render() {
    return (
      <div className="row">
        <div className="card" style={{ width: "18rem" }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.diachi}</h5>
            <p className="card-text">{this.state.giaphong}</p>
            <a href="/chitiet" className="btn btn-primary">
              Đặt phòng
            </a>
          </div>
        </div>

        <div className="form-group">
          <label>Thông tin chi tiết</label>
          <br />
          {this.state.chitiet}
        </div>
      </div>
    );
  }
}

export default ChiTiet;
