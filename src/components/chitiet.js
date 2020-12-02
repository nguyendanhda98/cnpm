import React from "react";
import axios from "axios";

class ChiTiet extends React.Component {
  constructor(props) {
    super(props);

    this.state = { diachi: "", giaphong: "", chitiet: "" };

    let chitiet = async () => {
      let id = this.props.location.search;
      let res = await axios.get(`http://localhost:3030/phong${id}`);
      let x = res.data.data; //mang
      x.map((y) => {
        return this.setState({
          diachi: y.diachi,
          giaphong: y.giaphong,
          chitiet: y.chitiet,
          emailchu: y.emailchu,
        });
      });
    };

    chitiet();
  }

  datphong = async (e) => {
    let id = this.props.location.search;
    let url = `http://localhost:3030/phong${id}`;
    let temp = await axios.get(url);
    let x = temp.data.data;
    let idd = x[0]._id;
    let url2 = `http://localhost:3030/phong/${idd}`;
    let emailkhach = localStorage.getItem("email");
    let data = { emailkhach: emailkhach };
    axios.patch(url2, data);
    alert("Đặt phòng Thành Công");
    this.props.history.push("/PhongDaDat");
  };

  render() {
    return (
      <div className="row">
        <div className="card" style={{ width: "18rem" }}>
          <img src="../logo192.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.diachi}</h5>
            <p className="card-text">{this.state.giaphong}</p>
            <button className="btn btn-primary" onClick={this.datphong}>
              Đặt phòng
            </button>
          </div>
          <div class="form-group">
            Chủ phòng: {this.state.emailchu} <br />
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
