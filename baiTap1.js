function timSoNguyenDuongNhoNhat() {
  var tong = 0;
  var soN = 1;
  while (tong <= 10000) {
    tong += soN;
    soN++;
  }
  soN--;
  document.getElementById("ketQua1").innerHTML =
    `<div> Số nguyên dương nhỏ nhất n là: ` + soN + `</div>`;
}
