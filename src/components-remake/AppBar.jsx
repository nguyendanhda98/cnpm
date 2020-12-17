import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

const dangnhap = (e) => {
  console.log(e);
  //window.location.replace("/dangnhap");
};

const dangxuat = (e) => {
    e.preventDefault();
    alert("Đăng xuất thành công");
    localStorage.removeItem("email");
    localStorage.removeItem("ten");
    window.location.replace("/");
  }

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hệ thống thuê và cho thuê phòng TDT
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Trang chủ
          </Button>
          <Button component={Link} to="/dangnhap" color="inherit">
            Đăng nhập
          </Button>
          <Button component={Link} to="/dangky" color="inherit">
            Đăng ký
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
