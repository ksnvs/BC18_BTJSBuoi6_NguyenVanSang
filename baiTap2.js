function tinhTongLuyThua() {
  var soX = document.getElementById("txtSoX").value * 1;
  var soN = document.getElementById("txtSoN").value * 1;
  if (Number.isNaN(soX) || !Number.isInteger(soN) || soN <= 0) {
    alert("Vui lòng nhập số X và n hợp lệ");
    return;
  }
  var resultTong = tinhTong(soX, soN);
  document.getElementById("ketQua2").innerHTML =
    `<div> Tổng là: ` + resultTong + `</div>`;
}

function tinhTong(x, n) {
  var tong = 0;
  for (i = 1; i <= n; i++) {
    tong += Math.pow(x, i);
  }
  return tong;
}
