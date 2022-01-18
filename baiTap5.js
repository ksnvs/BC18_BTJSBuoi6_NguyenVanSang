function inSoNguyenTo() {
  var soNguyen = document.getElementById("txtSoNguyen").value * 1;
  var resultDaySoNguyenTo = ``;
  if (!Number.isInteger(soNguyen) || soNguyen < 2) {
    alert(
      "Bạn nhập vào không phải số nguyên hoặc số bạn nhập vào không có số nguyên tố"
    );
    return;
  }
  resultDaySoNguyenTo = taoDaySoNguyenTo(soNguyen);
  document.getElementById("ketQua5").innerText =
    "Dãy số nguyên tố từ 1 đến " + soNguyen + " là: " + resultDaySoNguyenTo;
}

function taoDaySoNguyenTo(soNguyen) {
  var chuoiSNT = ``;
  var i = 2;
  while (i <= soNguyen) {
    if (kiemTraSoNguyenTo(i)) {
      chuoiSNT += i + ` `;
    }
    i++;
  }
  return chuoiSNT;
}

function kiemTraSoNguyenTo(soI) {
  var j = 2;
  var checkSNT = true;
  while (j <= soI / 2) {
    if (soI % j === 0) {
      checkSNT = false;
    }
    j++;
  }
  return checkSNT;
}
