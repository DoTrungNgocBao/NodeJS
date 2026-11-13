BÀI 3 – BÀI TẬP 02: TẠO WEB SERVER VỚI NODE.JS
1. Thông tin sinh viên
Họ và tên: Đỗ Trung Ngọc Bảo
Mã sinh viên: CD-CNTT18A05
Lớp: CD-CNTT18A
Môn học: Node.js
Bài thực hành: Bài 3 – Bài tập 02
2. Yêu cầu bài tập
Sử dụng Node.js và module http để xây dựng một Web Server đơn giản với các chức năng:

Tạo Web Server chạy tại cổng 3000.
Đường dẫn / hiển thị lời chào, họ tên và mã sinh viên.
Đường dẫn /about hiển thị thông tin giới thiệu bản thân.
Các đường dẫn không tồn tại trả về trạng thái HTTP 404.
Hiển thị nội dung HTML trên trình duyệt.
3. Cấu trúc thư mục
Dự án được tổ chức như sau:

NodeJS/
└── Bai03/
    └── Bt02/
        ├── bai02.js
        ├── Readme.md
        └── IMAGES/
            ├── 1-code.png
            ├── 2-terminal.png
            ├── 3-trangchu.png
            ├── 4-about.png
            └── 5-404.png

Giải thích:

bai02.js: File mã nguồn tạo Web Server bằng Node.js.
Readme.md: File mô tả bài tập và hướng dẫn thực hiện.
IMAGES/: Thư mục chứa hình ảnh minh chứng.
1-code.png: Ảnh mã nguồn trong VS Code.
2-terminal.png: Ảnh chạy chương trình trong Terminal.
3-trangchu.png: Ảnh kết quả trang chủ.
4-about.png: Ảnh kết quả trang giới thiệu.
5-404.png: Ảnh kết quả trang lỗi 404.
4. Mô tả chương trình
Chương trình sử dụng module http có sẵn trong Node.js.

Các thành phần chính:

require("http"): Khai báo module HTTP.
http.createServer(): Tạo Web Server.
req.url: Kiểm tra đường dẫn mà người dùng truy cập.
res.setHeader(): Thiết lập kiểu nội dung HTML và bảng mã UTF-8.
res.writeHead(): Thiết lập mã trạng thái HTTP.
res.end(): Gửi nội dung HTML về trình duyệt.
server.listen(3000): Khởi chạy Web Server tại cổng 3000.
5. Hướng dẫn chạy chương trình
Bước 1: Mở thư mục bài tập
Mở VS Code và truy cập thư mục:

NodeJS/Bai03/Bt02

Bước 2: Kiểm tra Node.js
Mở Terminal và nhập:

node -v

Nếu hiển thị phiên bản Node.js thì môi trường đã sẵn sàng.

Bước 3: Chạy Web Server
Trong Terminal, nhập:

node bai02.js

Bước 4: Kiểm tra kết quả
Khi chương trình chạy thành công, Terminal hiển thị:

Server dang chay tai http://localhost:3000

Giữ Terminal đang chạy và mở trình duyệt Chrome để kiểm tra.

6. Kết quả thực hiện
6.1. Trang chủ
Đường dẫn: http://localhost:3000/

Nội dung hiển thị:

CHAO MUNG DEN VOI WEB SERVER NODE.JS
Ho ten: Do Trung Ngoc Bao
Ma sinh vien: CD-CNTT18A05
Liên kết đến trang giới thiệu bản thân.
Trạng thái HTTP: 200 OK

6.2. Trang giới thiệu bản thân
Đường dẫn: http://localhost:3000/about

Nội dung hiển thị:

GIOI THIEU BAN THAN
Ho ten: Do Trung Ngoc Bao
Ma sinh vien: CD-CNTT18A05
Lop: CD-CNTT18A
Nganh: Cong nghe thong tin
Liên kết quay về trang chủ.
Trạng thái HTTP: 200 OK

6.3. Trang lỗi 404
Đường dẫn: http://localhost:3000/abc

Nội dung hiển thị:

404 - KHONG TIM THAY TRANG
Duong dan khong ton tai.
Liên kết quay về trang chủ.
Trạng thái HTTP: 404 Not Found

Đường dẫn /abc không được định nghĩa trong chương trình nên Web Server xử lý bằng nhánh else và trả về lỗi 404.

7. Hình ảnh minh chứng
Ảnh 1: Mã nguồn chương trình
Mã nguồn Node.js

Ảnh 2: Chạy Web Server trong Terminal
Terminal chạy Node.js

Ảnh 3: Kết quả trang chủ
Trang chủ

Ảnh 4: Kết quả trang giới thiệu bản thân
Trang giới thiệu

Ảnh 5: Kết quả trang lỗi 404
Trang lỗi 404

8. Kết luận
Sau khi thực hiện bài tập, đã hoàn thành các chức năng:

Tạo Web Server bằng Node.js.
Sử dụng module HTTP để xử lý yêu cầu từ trình duyệt.
Xây dựng trang chủ và trang giới thiệu bản thân.
Xử lý các đường dẫn không tồn tại bằng HTTP 404.
Chạy và kiểm tra chương trình trên localhost:3000.
Lưu hình ảnh minh chứng kết quả thực hiện.
Kết quả: Hoàn thành Bài 3 – Bài tập 02: Tạo Web Server với Node.js.s
