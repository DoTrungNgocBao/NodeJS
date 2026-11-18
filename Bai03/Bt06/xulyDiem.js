
/*
  BAI 3 - BT06: XAY DUNG MODULE TINH KET QUA HOC TAP
  Sinh vien: Do Trung Ngoc Bao
  MSSV: CD-CNTT18A05
*/

// Ham tinh diem trung binh 3 mon hoc
function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

// Ham xep loai hoc tap
function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Giỏi";
    } else if (diemTB >= 6.5) {
        return "Khá";
    } else if (diemTB >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Xuat 2 ham de bai06.js co the su dung
module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};
