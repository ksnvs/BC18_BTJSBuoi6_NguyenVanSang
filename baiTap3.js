function tinhGiaiThua() {
  var soN = document.getElementById("txtBt3SoN").value * 1;
  var resultGT = 0;
  if (Number.isInteger(soN) && soN > 0) {
    resultGT = tinhGT(soN);
    document.getElementById("ketQua3").innerHTML =
      `<div>Giai thừa của ` + soN + ` là: ` + resultGT + ` </div>`;
  } else {
    alert("Vui lòng nhập số nguyên dương n hợp lệ");
  }
}

function tinhGT(n) {
  var GT = 1;

  for (i = 1; i <= n; i++) {
    GT *= i;
  }
  return GT;
}
