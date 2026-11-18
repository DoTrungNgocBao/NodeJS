
/*
  BAI 03 - BT06
  XAY DUNG MODULE TINH KET QUA HOC TAP

  Sinh vien: Do Trung Ngoc Bao
  MSSV: CD-CNTT18A05
  Lop: CD-CNTT18A
*/

// Goi module xu ly diem
const { tinhDiemTrungBinh, xepLoai } = require("./xulyDiem");

// Bang mau giao dien Terminal
const mau = {
    reset: "\x1b[0m",
    tim: "\x1b[35m",
    xanh: "\x1b[36m",
    la: "\x1b[32m",
    vang: "\x1b[33m",
    do: "\x1b[31m",
    trang: "\x1b[97m",
    dam: "\x1b[1m"
};

// Du lieu 3 sinh vien
const sinhViens = [
    {
        hoTen: "Đỗ Trung Ngọc Bảo",
        toan: 9,
        van: 8,
        anh: 8.5
    },
    {
        hoTen: "Nguyễn Minh Anh",
        toan: 7,
        van: 6.5,
        anh: 7.5
    },
    {
        hoTen: "Trần Hoàng Phúc",
        toan: 5,
        van: 5.5,
        anh: 6
    }
];

// Tieu de chuong trinh
console.log(mau.tim + mau.dam);
console.log("======================================================");
console.log("          STUDY RESULT DASHBOARD - NODEJS BT06       ");
console.log("======================================================" + mau.reset);

console.log(mau.xanh + "  Sinh viên : Đỗ Trung Ngọc Bảo");
console.log("  MSSV      : CD-CNTT18A05");
console.log("  Lớp       : CD-CNTT18A" + mau.reset);

console.log(mau.tim + "\n------------------------------------------------------" + mau.reset);

// Tinh diem va hien thi ket qua
const ketQua = sinhViens.map((sv, index) => {
    const diemTB = tinhDiemTrungBinh(sv.toan, sv.van, sv.anh);
    const loai = xepLoai(diemTB);

    let mauLoai = mau.do;

    if (loai === "Giỏi") {
        mauLoai = mau.la;
    } else if (loai === "Khá") {
        mauLoai = mau.xanh;
    } else if (loai === "Trung bình") {
        mauLoai = mau.vang;
    }

    console.log(mau.trang + `\n  [${index + 1}] ${sv.hoTen}` + mau.reset);
    console.log(`      Toán: ${sv.toan} | Văn: ${sv.van} | Anh: ${sv.anh}`);
    console.log(`      Điểm trung bình: ${mau.dam}${diemTB.toFixed(2)}${mau.reset}`);
    console.log(`      Xếp loại: ${mauLoai}${mau.dam}${loai}${mau.reset}`);

    return {
        hoTen: sv.hoTen,
        diemTB,
        xepLoai: loai
    };
});

// Bang tong hop
console.log(mau.tim + "\n======================================================" + mau.reset);
console.log(mau.xanh + mau.dam + "                  BẢNG TỔNG HỢP                      " + mau.reset);
console.log(mau.tim + "======================================================" + mau.reset);

console.table(ketQua.map(sv => ({
    "Họ và tên": sv.hoTen,
    "Điểm TB": sv.diemTB.toFixed(2),
    "Xếp loại": sv.xepLoai
})));

console.log(mau.la + mau.dam);
console.log("  HOÀN THÀNH! Đã xử lý kết quả cho 3 sinh viên.");
console.log(mau.reset);
