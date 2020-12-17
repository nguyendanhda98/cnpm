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
import AppBar from "./components-remake/AppBar";
import Home from "./components-remake/Home";
import Search from "./components-remake/Search";
import SignIn from "./components-remake/SignIn";
import SignUp from "./components-remake/SignUp";
import Products from "./components-remake/Products";
import Container from "./components-remake/Container";
import Room from "./components-remake/Room";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Home />
          <Search />
          <SignUp /> */}
          {/* <DieuHuong user={localStorage.getItem("ten")} /> */}
          <AppBar />
          {/* <Container /> */}
          {/* <Products /> */}
          {/* <Route exact path="/" component={TimKiem} /> */}
          <Route exact path="/" component={Search} />
          {/* <Route path="/dangnhap" component={DangNhap} /> */}
          <Route path="/dangnhap" component={SignIn} />
          {/* <Route path="/dangky" component={DangKy} /> */}
          <Route path="/dangky" component={SignUp} />
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
