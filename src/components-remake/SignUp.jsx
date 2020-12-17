import React from 'react';
import axios from "axios";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const dangky = async (e, loai) => {
    e.preventDefault();
    const ten = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const sdt = document.getElementById("sdt").value;
    const matkhau1 = document.getElementById("password").value;
    const matkhau2 = document.getElementById("password2").value;
    if (
      ten === "" ||
      email === "" ||
      sdt === "" ||
      matkhau1 === "" ||
      matkhau2 === "" ||
      loai === ""
    ) {
      e.preventDefault();
      alert("Bạn cần điền đầy đủ thông tin!");
    } else if (matkhau1 !== matkhau2) {
      e.preventDefault();
      alert("Mật khẩu không trùng khớp!");
    } else {
      let dulieu = await axios.get(
        `http://localhost:3030/taikhoan?email=${email}`
      );
      let x = dulieu.data.data; //mang
      for (let i of x) {
        var emailCheck = i.email;
      }
      if (email === emailCheck) {
        alert("Email đã được sử dụng");
      } else {
        axios.post("http://localhost:3030/taikhoan", {
          ten: ten,
          email: email,
          sdt: sdt,
          matkhau: matkhau1,
          loai: loai,
        });
        alert("Đăng Ký Thành Công");
        this.props.history.push("/dangnhap");
        // window.location.replace("/dangnhap");
      }
    }
  };


export default function SignUp() {
  const classes = useStyles();
      const [value, setValue] = React.useState('khachhang');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Tên"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sdt"
                label="Số điện thoại"
                name="email"
                autoComplete="sdt"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Xác nhận mật khẩu"
                type="password"
                id="password2"
                autoComplete="current-password2"
              />
            </Grid>
            <FormControl component="fieldset">
  <FormLabel component="legend">Loại tài khoản</FormLabel>
  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} id="loaitaikhoan">
    <FormControlLabel value="khachhang" control={<Radio />} label="Khách hàng" />
    <FormControlLabel value="chunha" control={<Radio />} label="Chủ nhà" />
    
  </RadioGroup>
</FormControl>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick= {(e) => dangky(e,value)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/dangnhap" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}