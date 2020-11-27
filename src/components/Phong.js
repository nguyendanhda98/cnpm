import React from "react";
import { Link } from "react-router-dom";

class Phong extends React.Component {

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <form action="/chitiet" method="GET">
            <img src="../logo192.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.phong.diachi}</h5>
              <p className="card-text">
                {this.props.phong.giaphong} triệu/tháng
              </p>

              <input
                hidden
                name="_id"
                defaultValue={this.props.phong._id}
              ></input>
              <button type="submit">Chi tiết</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Phong;
