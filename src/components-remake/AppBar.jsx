import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {

const dangxuat = (e) => {
  e.preventDefault();
  alert("Đăng xuất thành công");
  setTen("")
  setLoai("")
  localStorage.removeItem("email");
  localStorage.removeItem("ten");
  localStorage.removeItem("loai");

  window.location.replace("/");
};

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Ten, setTen] = useState(localStorage.getItem("ten"));
  const [Loai, setLoai] = useState(localStorage.getItem("loai"));

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            label="Hệ thống thuê và cho thuê phòng trọ TDT"
            component={Link}
            to="/"
          />
          <Tab
            style={{ display: Ten ? "none" : "block" }}
            label="Đăng nhập"
            component={Link}
            to="/dangnhap"
          />
          <Tab
            style={{ display: Ten ? "none" : "block" }}
            label="Đăng ký"
            component={Link}
            to="/dangky"
          />
          <Tab
            style={{
              display: Loai === "chunha" ? "block" : "none",
            }}
            label="Cho thuê phòng"
            component={Link}
            to="/chunha"
          />
          <Tab
            style={{ display: Ten ? "block" : "none" }}
            label="Thông tin cá nhân"
            component={Link}
            to="/ThongTinCaNhan"
          />
          <Tab
            style={{ display: Ten ? "block" : "none" }}
            label="Phòng đã yêu cầu"
            component={Link}
            to="/PhongDaDat"
          />
          <Tab
            style={{
              display: Loai === "chunha" ? "block" : "none",
            }}
            label="Phòng đã cho thuê"
            component={Link}
            to="/PhongDaChoThue"
          />
          <Tab
            style={{
              display: Loai === "chunha" ? "block" : "none",
            }}
            label="Yêu cầu đặt phòng"
            component={Link}
            to="/YeuCauDatPhong"
          />
          <Tab
            style={{
              display: Loai === "chunha" ? "block" : "none",
            }}
            label="Quản lý phòng"
            component={Link}
            to="/QuanLyPhong"
          />
          <Tab
            style={{ display: Ten ? "block" : "none" }}
            label="Đăng Xuất"
            component={Link}
            to="#"
            onClick={dangxuat}
          />
          <Typography
            style={{ display: Ten ? "block" : "none" }}
            component="div"
          >
            Xin chào {Ten}
          </Typography>
        </Tabs>
      </AppBar>
    </div>
  );
}
