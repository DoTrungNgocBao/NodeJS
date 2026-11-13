
const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    if (req.url === "/") {
        res.writeHead(200);
        res.end(`
            <h1>CHAO MUNG DEN VOI WEB SERVER NODE.JS</h1>
            <p>Ho ten: Do Trung Ngoc Bao</p>
            <p>Ma sinh vien: CD-CNTT18A05</p>
            <a href="/about">Gioi thieu ban than</a>
        `);
    }
    else if (req.url === "/about") {
        res.writeHead(200);
        res.end(`
            <h1>GIOI THIEU BAN THAN</h1>
            <p>Ho ten: Do Trung Ngoc Bao</p>
            <p>Ma sinh vien: CD-CNTT18A05</p>
            <p>Lop: CD-CNTT18A</p>
            <p>Nganh: Cong nghe thong tin</p>
            <a href="/">Quay ve trang chu</a>
        `);
    }
    else {
        res.writeHead(404);
        res.end(`
            <h1>404 - KHONG TIM THAY TRANG</h1>
            <p>Duong dan khong ton tai.</p>
            <a href="/">Quay ve trang chu</a>
        `);
    }
});

server.listen(3000, () => {
    console.log("Server dang chay tai http://localhost:3000");
});
