
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

// Danh sach 5 sinh vien
const danhSach = [
    new SinhVien("SV01", "Do Trung Ngoc Bao", 22, 8.5),
    new SinhVien("SV02", "Nguyen Van An", 20, 4),
    new SinhVien("SV03", "Tran Thi Binh", 21, 7),
    new SinhVien("SV04", "Le Van Cuong", 19, 3.5),
    new SinhVien("SV05", "Pham Thi Dung", 20, 6.5)
];

// Loc sinh vien co diem tu 5 tro len
const sinhVienDat = danhSach.filter(sv => sv.diem >= 5);

// Hien thi ket qua
console.log("DANH SACH SINH VIEN DAT YEU CAU:");

sinhVienDat.forEach(sv => {
    console.log(
        `${sv.ma} - ${sv.hoTen} - Tuoi: ${sv.tuoi} - Diem: ${sv.diem}`
    );
});
