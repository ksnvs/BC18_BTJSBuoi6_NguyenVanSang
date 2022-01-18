function inTheDiv() {
  document.getElementById("ketQua4").innerHTML = taoTheDiv();
}

function taoTheDiv() {
  var chuoiThe = ``;
  for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      chuoiThe += `<div style="background-color: red; height:30px; margin-bottom: 5px"></div>`;
    } else {
      chuoiThe += `<div style="background-color: blue;height:30px;margin-bottom: 5px"></div>`;
    }
  }
  return chuoiThe;
}
