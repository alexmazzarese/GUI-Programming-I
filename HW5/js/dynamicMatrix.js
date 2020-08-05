//     Alex Mazzarese
//     Homework 5 (JAVA File)
//     Gui Programming I (Sec 021)
//     Start Date: 7/26/20
//     End Date: 7/29/20

function matrixSetup() {
   var x_axis;
   var data;
   var matrix = document.getElementById("main_matrix");
   var xx1 = Math.round(document.getElementById("x1").value);
   var xx2 = Math.round(document.getElementById("x2").value);
   var yy1 = Math.round(document.getElementById("y1").value);
   var yy2 = Math.round(document.getElementById("y2").value);
   matrix.innerHTML ="";
   matrixApply(xx1,xx2,yy1,yy2,matrix,x_axis,data);
 }

function matrixApply(xx1,xx2,yy1,yy2,matrix,x_axis,data){
  // https://www.w3schools.com/jsref/met_tablerow_insertcell.asp
  // This link ^^^ was helpful in developing how to handle the different Rows/Cells
  if(xx1 <= xx2 && yy1 < yy2){
    x_axis = matrix.insertRow();
    data = x_axis.insertCell();
    for (var a = xx1; a <= xx2; a++) {
      data = x_axis.insertCell();
      data.innerHTML = a;
    }

    for (var b = yy1; b <= yy2; i++) {
      x_axis = matrix.insertRow();
      data = x_axis.insertCell();
      data.innerHTML = b;
      for (var c = xx1; c <= xx2; c++) {
        data = x_axis.insertCell();
        data.innerHTML = b*c;
      }
    }
} else if(xx1 > xx2 && yy1 < yy2){
    x_axis = matrix.insertRow();
    data = x_axis.insertCell();
    for (var d = xx1; d >= xx2; d--) {
      data = x_axis.insertCell();
      data.innerHTML = d;
    }
    for (var e = yy1; e <= yy2; e++) {
      x_axis = matrix.insertRow();
      data = x_axis.insertCell();
      data.innerHTML = e;
      for (var f = xx1; f >= xx2; f--) {
        data = x_axis.insertCell();
        data.innerHTML = e*f;
      }
    }
} else if(xx1 < xx2 && yy1 > yy2){
    x_axis = matrix.insertRow();
    data = x_axis.insertCell();
    for (var g = xx1; g <= xx2; g++) {
      data = x_axis.insertCell();
      data.innerHTML = g;
    }
    for (var h = yy1; h >= yy2; h--) {
      x_axis = matrix.insertRow();
      data = x_axis.insertCell();
      data.innerHTML = h;
      for (var i = xx1; i <= xx2; i++) {
        data = x_axis.insertCell();
        data.innerHTML = h*i;
      }
    }
  } else {
    x_axis = matrix.insertRow();
    data = x_axis.insertCell();
    for (var j = xx1; j >= xx2; j--) {
      data = x_axis.insertCell();
      data.innerHTML = j;
    }
    for (var k = yy1; k >= yy2; k--) {
      x_axis = matrix.insertRow();
      data = x_axis.insertCell();
      data.innerHTML = k;
      for (var l = xx1; l >= xx2; l--) {
        data = x_axis.insertCell();
        data.innerHTML = k*l;
      }
    }
  }
}
