BÀI 3 – BT01: QUẢN LÝ THÔNG TIN SINH VIÊN BẰNG JAVASCRIPT ES6

1. Thông tin sinh viên

Họ tên: Đỗ Trung Ngọc Bảo

Lớp: CD-CNTT18A

Môn học: Node.js

Bài thực hành: Bài 3 – Bài tập 01

2. Yêu cầu bài thực hành

Khai báo danh sách gồm 5 sinh viên.

Mỗi sinh viên có mã, họ tên, tuổi và điểm.

Sử dụng class và constructor để biểu diễn sinh viên.

Sử dụng Arrow Function để lọc sinh viên có điểm từ 5 trở lên.

Hiển thị danh sách sinh viên đạt yêu cầu bằng console.log().

3. Mô tả chương trình

class SinhVien: Khai báo lớp sinh viên.

constructor(): Khởi tạo thông tin sinh viên.

filter(): Lọc danh sách sinh viên.

sv => sv.diem >= 5: Điều kiện lọc bằng Arrow Function.

forEach(): Duyệt danh sách sinh viên.

console.log(): Hiển thị kết quả ra Terminal.

4. Hướng dẫn chạy chương trình

Bước 1: Cài đặt Node.js.

Bước 2: Mở thư mục Bai03/Bt01 trong Visual Studio Code.

Bước 3: Mở Terminal và chạy lệnh:

node bt01.js

5. Kết quả chương trình

DANH SACH SINH VIEN DAT YEU CAU:
SV01 - Do Trung Ngoc Bao - Tuoi: 22 - Diem: 8.5
SV03 - Tran Thi Binh - Tuoi: 21 - Diem: 7
SV05 - Pham Thi Dung - Tuoi: 20 - Diem: 6.5

Kết quả: Có 3 sinh viên đạt yêu cầu.

6. Hình ảnh minh chứng

Ảnh 1: Mã nguồn chương trình



Ảnh 2: Kết quả chạy chương trình



7. Mã nguồn bài tập

Xem Bài 3 – BT01
