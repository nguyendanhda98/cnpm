import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import DangNhap from "./components/DangNhap";
import DieuHuong from "./components/DieuHuong";
import TimKiem from "./components/TimKiem";
import DangKy from "./components/DangKy";
import ChuNha from "./components/ChuNha";
import ChiTiet from "./components/chitiet";
import ThongTinCaNhan from "./components/ThongTinCaNhan";
import PhongDaDat from "./components/PhongDaDat";
import PhongDaChoThue from "./components/PhongDaChoThue";
import YeuCauDatPhong from "./components/YeuCauDatPhong";
import QuanLyPhong from "./components/QuanLyPhong";
import Admin from "./components/Admin";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <DieuHuong />
          <Route exact path="/" component={TimKiem} />
          <Route path="/dangnhap" component={DangNhap} />
          <Route path="/dangky" component={DangKy} />
          <Route path="/chunha" component={ChuNha} />
          <Route path="/chitiet" component={ChiTiet} />
          <Route path="/ThongTinCaNhan" component={ThongTinCaNhan} />
          <Route path="/PhongDaDat" component={PhongDaDat} />
          <Route path="/PhongDaChoThue" component={PhongDaChoThue} />
          <Route path="/YeuCauDatPhong" component={YeuCauDatPhong} />
          <Route path="/QuanLyPhong" component={QuanLyPhong} />
          <Route path="/Admin" component={Admin} />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
