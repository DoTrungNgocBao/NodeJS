
const http = require("http");
const { URL } = require("url");

const PORT = 3001;

const escapeHTML = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));

function giaoDien(tieuDe, noiDung, loai = "success") {
  const mau = loai === "error" ? "#fb7185" : "#38f5bb";

  return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHTML(tieuDe)} | NodeJS BT07</title>
<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: #eef4ff;
  background: radial-gradient(ellipse at 15% 10%, #243e85 0%, transparent 45%),
              radial-gradient(ellipse at 90% 90%, #522078 0%, transparent 40%),
              #080d1e;
}
header {
  padding: 24px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff20;
}
.logo { font-size: 24px; font-weight: 900; }
.logo span { color: #38f5bb; }
.tag {
  color: #9eafff;
  border: 1px solid #5363a6;
  border-radius: 30px;
  padding: 9px 15px;
}
main {
  max-width: 1080px;
  margin: 0 auto;
  padding: 55px 22px;
}
.hero { text-align: center; margin-bottom: 40px; }
.hero h1 {
  font-size: clamp(30px, 5vw, 54px);
  margin: 12px 0;
  background: linear-gradient(90deg, #44e9ff, #a68bff, #38f5bb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.hero p { color: #b4c0de; font-size: 17px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
.card {
  background: #111a32dd;
  border: 1px solid #5167a070;
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 12px 45px #0006;
}
.card:hover { border-color: #46d9f0; }
.card h2 { margin-top: 0; }
label { display: block; color: #aab9dc; margin: 15px 0 7px; }
input {
  width: 100%;
  background: #080e22;
  color: white;
  border: 1px solid #40557d;
  border-radius: 11px;
  padding: 14px;
  font-size: 16px;
}
input:focus { outline: 2px solid #38c9f5; }
button, .btn {
  display: inline-block;
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background: linear-gradient(110deg, #078df2, #8252e9);
  color: white;
  border: 0;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
}
button:hover, .btn:hover { filter: brightness(1.18); }
code {
  display: block;
  margin-top: 17px;
  padding: 12px;
  background: #080e22;
  color: #6feacb;
  border-radius: 9px;
  overflow-wrap: anywhere;
}
.result {
  max-width: 700px;
  margin: 20px auto;
  padding: 45px 25px;
  text-align: center;
  border: 1px solid ${mau};
  border-radius: 22px;
  background: #111a32;
  box-shadow: 0 0 45px ${mau}22;
}
.result h2 { color: ${mau}; font-size: 32px; overflow-wrap: anywhere; }
footer { text-align: center; padding: 30px; color: #93a4ca; }
</style>
</head>
<body>
<header>
  <div class="logo">NODE<span>JS</span> / BT07</div>
  <div class="tag">PORT 3001</div>
</header>
<main>${noiDung}</main>
<footer>Đỗ Trung Ngọc Bảo | CD-CNTT18A05 | Bài 3 - BT07</footer>
</body>
</html>`;
}

function trangChu() {
  return giaoDien("Trang chủ", `
    <section class="hero">
      <div class="tag" style="display:inline-block">NODE.JS • HTTP • URL</div>
      <h1>URL PARAMETER LAB</h1>
      <p>Bài 7 - Xử lý tham số URL trên Web Server</p>
      <p>Nhập dữ liệu để kiểm tra các chức năng của chương trình.</p>
    </section>

    <section class="grid">
      <div class="card">
        <h2>👋 Chào người dùng</h2>
        <p>Nhập tên để nhận lời chào từ Web Server.</p>
        <form action="/hello" method="GET">
          <label>Họ tên</label>
          <input name="name" placeholder="Ví dụ: Minh" required>
          <button type="submit">GỬI LỜI CHÀO →</button>
        </form>
        <code>/hello?name=Minh</code>
      </div>

      <div class="card">
        <h2>🧮 Tính tổng hai số</h2>
        <p>Web Server đọc tham số a, b và tính tổng.</p>
        <form action="/sum" method="GET">
          <label>Số a</label>
          <input name="a" type="number" step="any" placeholder="10" required>
          <label>Số b</label>
          <input name="b" type="number" step="any" placeholder="20" required>
          <button type="submit">TÍNH TỔNG →</button>
        </form>
        <code>/sum?a=10&b=20</code>
      </div>
    </section>
  `);
}

function trangKetQua(tieuDe, thongBao, loai) {
  const kyHieu = loai === "error" ? "❌" : "✅";
  return giaoDien(tieuDe, `
    <section class="hero">
      <h1>${escapeHTML(tieuDe)}</h1>
      <p>Kết quả xử lý yêu cầu từ Node.js Web Server</p>
    </section>
    <section class="result">
      <div style="font-size:50px">${kyHieu}</div>
      <h2>${escapeHTML(thongBao)}</h2>
      <a href="/" class="btn">← VỀ TRANG CHỦ</a>
    </section>
  `, loai);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const path = url.pathname;
  const params = url.searchParams;

  let status = 200;
  let html;

  if (path === "/") {
    html = trangChu();

  } else if (path === "/hello") {
    const name = params.get("name");

    if (!name || !name.trim()) {
      status = 400;
      html = trangKetQua(
        "Thiếu tham số",
        "Vui lòng nhập name. Ví dụ: /hello?name=Minh",
        "error"
      );
    } else {
      html = trangKetQua(
        "Chào người dùng",
        `Xin chào ${name.trim()}`,
        "success"
      );
    }

  } else if (path === "/sum") {
    const aText = params.get("a");
    const bText = params.get("b");

    if (!aText || !aText.trim() || !bText || !bText.trim()) {
      status = 400;
      html = trangKetQua(
        "Thiếu tham số",
        "Vui lòng nhập đủ a và b. Ví dụ: /sum?a=10&b=20",
        "error"
      );
    } else {
      const a = Number(aText);
      const b = Number(bText);

      if (!Number.isFinite(a) || !Number.isFinite(b)) {
        status = 400;
        html = trangKetQua(
          "Giá trị không hợp lệ",
          "Tham số a và b phải là số hợp lệ.",
          "error"
        );
      } else if (!Number.isFinite(a + b)) {
        status = 400;
        html = trangKetQua(
          "Giá trị không hợp lệ",
          "Tổng vượt quá phạm vi số được hỗ trợ.",
          "error"
        );
      } else {
        html = trangKetQua("Kết quả tính tổng", `Tổng = ${a + b}`, "success");
      }
    }

  } else {
    status = 404;
    html = trangKetQua(
      "404 - Không tìm thấy",
      "Đường dẫn bạn yêu cầu không tồn tại.",
      "error"
    );
  }

  res.writeHead(status, {
    "Content-Type": "text/html; charset=utf-8"
  });
  res.end(html);
});

server.listen(PORT, () => {
  console.log("========================================");
  console.log("  NODEJS - BAI 03 - BT07");
  console.log("  Xu ly tham so URL tren Web Server");
  console.log("========================================");
  console.log(`  Trang chu: http://localhost:${PORT}`);
  console.log(`  Chao:     http://localhost:${PORT}/hello?name=Minh`);
  console.log(`  Tinh tong:http://localhost:${PORT}/sum?a=10&b=20`);
  console.log("========================================");
});
v
