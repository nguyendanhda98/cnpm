import React from "react";
import axios from "axios";

class ChuNha extends React.Component {
  state = {
    thanhpho: "",
    diachi: "",
    giaphong: "",
    chitiet: "",
  };

  thanhpho = (e) => {
    this.setState({
      thanhpho: e.target.value,
    });
  };

  diachi = (e) => {
    this.setState({
      diachi: e.target.value,
    });
  };

  giaphong = (e) => {
    this.setState({
      giaphong: e.target.value,
    });
  };

  chitiet = (e) => {
    this.setState({
      chitiet: e.target.value,
    });
  };

  taophong = (e) => {
    let thanhpho1 = this.state.thanhpho;
    let diachi1 = this.state.diachi;
    let giaphong1 = this.state.giaphong;
    let chitiet1 = this.state.chitiet;
    

    if (
      thanhpho1 === "" ||
      (diachi1 === "") | (giaphong1 === "") | (chitiet1 === "")
    ) {
      alert("Vui lòng điền đầy đủ thông tin");
    } else {
      alert("Tạo phòng thành công");

      const data = {
        thanhpho: this.state.thanhpho,
        diachi: this.state.diachi,
        giaphong: this.state.giaphong,
        chitiet: this.state.chitiet,
        emailchu: localStorage.getItem("email"),
        emailkhach: "",
        emailthue: "",
      };
      axios.post("http://localhost:3030/phong", data);
      this.props.history.push("/QuanLyPhong");
    }
  };

  render() {
    return (
      <div>
        <p>Trở thành chủ nhà</p>

        <div className="form-group">
          <label htmlFor="city">Thành phố </label>
          <select onChange={this.thanhpho} id="city" name="thanhpho">
            <option value=""></option>
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
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Địa chỉ</label>
          <input
            onChange={this.diachi}
            type="text"
            name="diachi"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Địa chỉ"
          />
        </div>

        <div className="form-group">
          <label htmlFor="diaChi">Giá phòng/tháng</label>
          <input
            onChange={this.giaphong}
            type="number"
            name="giaphong"
            className="form-control"
            id="diaChi"
            aria-describedby="emailHelp"
            placeholder="Giá phòng"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Thông tin chi tiết
          </label>
          <textarea
            onChange={this.chitiet}
            name="chitiet"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
          ></textarea>
        </div>

        <button onClick={this.taophong} className="btn btn-primary">
          Bắt đầu tạo phòng cho thuê
        </button>
      </div>
    );
  }
}

export default ChuNha;
