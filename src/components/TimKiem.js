import React from "react";
import Phong from "./Phong";
import axios from "axios";

class TimKiem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phongs: [] };
  }

  timkiem = async (event) => {
    event.preventDefault();
    var data = document.getElementById("thanhpho").value;
    const res = await axios.get(`http://localhost:3030/phong?thanhpho=${data}`);
    const x = res.data.data; //mang
    if (x.length === 0) {
      this.setState({ phongs: "Hiện tại chưa có phòng ở đây" });
    } else {
      const z = x.map((y) => {
        return (
          <div key={y._id}>
            <Phong phong={y} />
          </div>
        );
      });
      this.setState({ phongs: z });
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline" onSubmit={this.timkiem}>
            <label>Bạn muốn ở đâu?</label>
            <select id="thanhpho" name="thanhpho">
              <option value="An Giang">An Giang</option>
              <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
              <option value="Bắc Giang">Bắc Giang</option>
              <option value="Bắc Kạn">Bắc Kạn</option>
              <option value="Bạc Liêu">Bạc Liêu</option>
              <option value="Bắc Ninh">Bắc Ninh</option>
              <option value="Bến Tre">Bến Tre</option>
              <option value="Bình Định">Bình Định</option>
              <option value="Bình Dương">Bình Dương</option>
              <option value="Bình Phước">Bình Phước</option>
              <option value="Bình Thuận">Bình Thuận</option>
              <option value="Bình Thuận">Bình Thuận</option>
              <option value="Cà Mau">Cà Mau</option>
              <option value="Cao Bằng">Cao Bằng</option>
              <option value="Đắk Lắk">Đắk Lắk</option>
              <option value="Đắk Nông">Đắk Nông</option>
              <option value="Điện Biên">Điện Biên</option>
              <option value="Đồng Nai">Đồng Nai</option>
              <option value="Đồng Tháp">Đồng Tháp</option>
              <option value="Đồng Tháp">Đồng Tháp</option>
              <option value="Gia Lai">Gia Lai</option>
              <option value="Hà Giang">Hà Giang</option>
              <option value="Hà Nam">Hà Nam</option>
              <option value="Hà Tĩnh">Hà Tĩnh</option>
              <option value="Hải Dương">Hải Dương</option>
              <option value="Hậu Giang">Hậu Giang</option>
              <option value="Hòa Bình">Hòa Bình</option>
              <option value="Hưng Yên">Hưng Yên</option>
              <option value="Khánh Hòa">Khánh Hòa</option>
              <option value="Kiên Giang">Kiên Giang</option>
              <option value="Kon Tum">Kon Tum</option>
              <option value="Lai Châu">Lai Châu</option>
              <option value="Lâm Đồng">Lâm Đồng</option>
              <option value="Lạng Sơn">Lạng Sơn</option>
              <option value="Lào Cai">Lào Cai</option>
              <option value="Long An">Long An</option>
              <option value="Nam Định">Nam Định</option>
              <option value="Nghệ An">Nghệ An</option>
              <option value="Ninh Bình">Ninh Bình</option>
              <option value="Ninh Thuận">Ninh Thuận</option>
              <option value="Phú Thọ">Phú Thọ</option>
              <option value="Quảng Bình">Quảng Bình</option>
              <option value="Quảng Bình">Quảng Bình</option>
              <option value="Quảng Ngãi">Quảng Ngãi</option>
              <option value="Quảng Ninh">Quảng Ninh</option>
              <option value="Quảng Trị">Quảng Trị</option>
              <option value="Sóc Trăng">Sóc Trăng</option>
              <option value="Sơn La">Sơn La</option>
              <option value="Tây Ninh">Tây Ninh</option>
              <option value="Thái Bình">Thái Bình</option>
              <option value="Thái Nguyên">Thái Nguyên</option>
              <option value="Thanh Hóa">Thanh Hóa</option>
              <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
              <option value="Tiền Giang">Tiền Giang</option>
              <option value="Trà Vinh">Trà Vinh</option>
              <option value="Tuyên Quang">Tuyên Quang</option>
              <option value="Vĩnh Long">Vĩnh Long</option>
              <option value="Vĩnh Phúc">Vĩnh Phúc</option>
              <option value="Yên Bái">Yên Bái</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
              <option value="Tp.Hà Nội">Tp.Hà Nội</option>
              <option value="TP.HCM">TP.HCM</option>
            </select>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Tìm kiếm
            </button>
          </form>
        </nav>
        <div className="row">{this.state.phongs}</div>
      </div>
    );
  }
}

export default TimKiem;
