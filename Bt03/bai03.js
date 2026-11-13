
const fs = require("fs");

const tenFile = "thongtin.txt";

// Bước 1: Tạo tập tin chứa họ tên và mã sinh viên
const thongTin = "Họ tên: Đỗ Trung Ngọc Bảo\nMã sinh viên: CD-CNTT18A05\n";

fs.writeFile(tenFile, thongTin, "utf8", (err) => {
    if (err) {
        console.log("Lỗi tạo tập tin:", err);
        return;
    }

    console.log("=== BƯỚC 1: TẠO TẬP TIN THÀNH CÔNG ===");

    // Bước 2: Đọc nội dung tập tin ban đầu
    fs.readFile(tenFile, "utf8", (err, data) => {
        if (err) {
            console.log("Lỗi đọc tập tin:", err);
            return;
        }

        console.log("\n=== BƯỚC 2: NỘI DUNG BAN ĐẦU ===");
        console.log(data);

        // Bước 3: Ghi nối thêm tên lớp
        fs.appendFile(tenFile, "Lớp: CD-CNTT18A\n", "utf8", (err) => {
            if (err) {
                console.log("Lỗi ghi nối tập tin:", err);
                return;
            }

            console.log("=== BƯỚC 3: ĐÃ GHI NỐI THÊM TÊN LỚP ===");

            // Bước 4: Đọc lại nội dung sau cập nhật
            fs.readFile(tenFile, "utf8", (err, data) => {
                if (err) {
                    console.log("Lỗi đọc lại tập tin:", err);
                    return;
                }

                console.log("\n=== BƯỚC 4: NỘI DUNG SAU CẬP NHẬT ===");
                console.log(data);
            });
        });
    });
});
