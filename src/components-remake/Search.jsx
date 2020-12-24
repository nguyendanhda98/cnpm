/* eslint-disable no-use-before-define */
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Room from "./Room";
import axios from "axios";

export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  const [Phong, setPhong] = useState("")

const timkiem = async (event) => {
    event.preventDefault();
    var data = document.getElementById("grouped-demo").value;
    const res = await axios.get(`http://localhost:3030/phong?thanhpho=${data}`);
    const x = res.data.data; //mang
    if (x.length === 0) {
      setPhong("Hiện tại chưa có phòng ở đây");
    } else {
      let ax = x.filter((b) => b.emailkhach === "");
      let a = ax.filter((b) => b.emailthue === "");
      if (a.length === 0) {
        setPhong("Hiện tại chưa có phòng ở đây");
      } else {
        let z = a.map((y) => {
          return (
            <div key={y._id}>
              {/* <Phong phong={y} /> */}
                    <Room {...y} />
            </div>
          );
        });
        setPhong(z);
      }
    }
  };

  return (
    <div>
      <Autocomplete
        id="grouped-demo"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Bạn muốn ở đâu?" variant="outlined" />
        )}
      />
      <Button variant="contained" color="primary" onClick={timkiem}>
        Tìm kiếm
      </Button>
      {Phong}
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "An Giang" },
  { title: "Bà Rịa - Vũng Tàu" },
  { title: "Bắc Giang" },
  { title: "Bắc Kạn" },
  { title: "Bạc Liêu" },
  { title: "Bắc Ninh" },
  { title: "Bến Tre" },
  { title: "Bình Định" },
  { title: "Bình Dương" },
  { title: "Bình Phước" },
  { title: "Bình Thuận" },
  { title: "Bình Thuận" },
  { title: "Cà Mau" },
  { title: "Cao Bằng" },
  { title: "Đắk Lắk" },
  { title: "Đắk Nông" },
  { title: "Điện Biên" },
  { title: "Đồng Nai" },
  { title: "Đồng Tháp" },
  { title: "Đồng Tháp" },
  { title: "Gia Lai" },
  { title: "Hà Giang" },
  { title: "Hà Nam" },
  { title: "Hà Tĩnh" },
  { title: "Hải Dương" },
  { title: "Hậu Giang" },
  { title: "Hòa Bình" },
  { title: "Hưng Yên" },
  { title: "Khánh Hòa" },
  { title: "Kiên Giang" },
  { title: "Kon Tum" },
  { title: "Lai Châu" },
  { title: "Lâm Đồng" },
  { title: "Lạng Sơn" },
  { title: "Lào Cai" },
  { title: "Long An" },
  { title: "Nam Định" },
  { title: "Nghệ An" },
  { title: "Ninh Bình" },
  { title: "Ninh Thuận" },
  { title: "Phú Thọ" },
  { title: "Quảng Bình" },
  { title: "Quảng Bình" },
  { title: "Quảng Ngãi" },
  { title: "Quảng Ninh" },
  { title: "Quảng Trị" },
  { title: "Sóc Trăng" },
  { title: "Sơn La" },
  { title: "Tây Ninh" },
  { title: "Thái Bình" },
  { title: "Thái Nguyên" },
  { title: "Thanh Hóa" },
  { title: "Thừa Thiên Huế" },
  { title: "Tiền Giang" },
  { title: "Trà Vinh" },
  { title: "Tuyên Quang" },
  { title: "Vĩnh Long" },
  { title: "Vĩnh Phúc" },
  { title: "Yên Bái" },
  { title: "Phú Yên" },
  { title: "Cần Thơ" },
  { title: "Đà Nẵng" },
  { title: "Hải Phòng" },
  { title: "Hà Nội" },
  { title: "Hồ Chí Minh" },
];
