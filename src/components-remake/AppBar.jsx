import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
};

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Trang chủ" component={Link} to="/" />
          <Tab label="Đăng nhập" component={Link} to="/dangnhap" />
          <Tab label="Đăng ký" component={Link} to="/dangky" />
        </Tabs>
      </AppBar>
    </div>
  );
}
