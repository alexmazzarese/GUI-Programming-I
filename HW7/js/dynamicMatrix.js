//     Alex Mazzarese
//     Homework 7 (JAVA File)
//     GUI Programming I (Sec 021)
//     Start Date: 8/6/20
//     End Date: 8/10/20
//     The purpose of this HW7 is to add a slider as well as tab functionality
//     to our previous HW5 and HW6 files. The only part of this that I wasn't
//     able to get fully functioning was the dynamic table and the tab save.
//     The tabs work and delete perfectly fine, but they don't save tables
//     sometimes, so they aren't fully functional.

$(document).ready(function(){
  $("#tableForm").validate({
     rules: { x1: { number: true, required: true},
              x2: { number: true, required: true},
              y1: { number: true, required: true},
              y2: { number: true, required: true}
            }
  });
});

// https://stackoverflow.com/questions/13382600/jquery-slider-global-javascript-variables
// Helped me to figure out how to utilize the slider features.
$(document).ready(function(){
  $(function(){
    $("#x1slider").slider({
      min: -50,
      max: 50,
      slide: function(event, ui) {
        $("#x1").val(ui.value);
      }
    });
  });
  $(function(){
    $("#x2slider").slider({
      min: -50,
      max: 50,
      slide: function(event, ui) {
        $("#x2").val(ui.value);
      }
    });
  });
  $(function(){
    $("#y1slider").slider({
      min: -50,
      max: 50,
      slide: function(event, ui) {
        $("#y1").val(ui.value);
      }
    });
  });
  $(function(){
    $("#y2slider").slider({
      min: -50,
      max: 50,
      slide: function(event, ui) {
        $("#y2").val(ui.value);
      }
    });
  });
});

$("#x1").change(function(){
  $("#x1slider").slider("value", $(this).val());
});
$("#x2").change(function(){
  $("#x2slider").slider("value", $(this).val());
});
$("#y1").change(function(){
  $("#y1slider").slider("value", $(this).val());
});
$("#y2").change(function(){
  $("#y2slider").slider("value", $(this).val());
});

// https://stackoverflow.com/questions/18572586/append-to-dynamically-created-tab
// This page was helpful with tab development
function matrixSave() {
  matrixSetup();
  var numTabs = $('div#tabs ul li.tab').length+1;
  if(numTabs > 20) {
    alert("Sorry, only 20 tabs are allowed maximum.");
    return false;
  }
  $('div#tabs ul').append('<li class="tab"><a href="#tab-' + numTabs + '">Tab ' + numTabs + '</a>' + '<span class="ui-icon ui-icon-close" role="presentation"></span>' + '</li>');
  $('div#tabs').append('<div id="tab-' + numTabs + '"></div>');
  $('div#tabs').tabs("refresh");
  $('div#tabs').tabs("option", "active", -1);
  $('div#tabs').delegate('span.ui-icon-close', 'click', function() {
    var tmpNum = $(this).closest("li").remove().attr("aria-controls");
    $("#" + tmpNum).remove();
  });
  insertContent($('#main_matrix'));
  numTabs++;
}

function insertContent(content) {
  var currentTab = $("div#tabs").tabs('option', 'active');
  currentTab += 1;
  $("#tab-" + currentTab).append(content);
}

$('div#tabs').tabs();

$("#deleteAll").click(function() {
  $(document).ready(function(){
    (function() {
      deleteTabs();
    })();
  });
});

function deleteTabs() {
  $("div#tabs ul li").remove();
  $("#main_matrix").remove();
}

function matrixSetup() {
   var x_axis;
   var data;
   var matrix = document.getElementById("main_matrix");
   var xx1 = Math.round(document.getElementById("x1").value);
   var xx2 = Math.round(document.getElementById("x2").value);
   var yy1 = Math.round(document.getElementById("y1").value);
   var yy2 = Math.round(document.getElementById("y2").value);
   if(!$("#tableForm").valid()){
     return;
   }
   matrix.innerHTML ="";
   matrixApply(xx1,xx2,yy1,yy2,matrix,x_axis,data);
 }

function matrixApply(xx1,xx2,yy1,yy2,matrix,x_axis,data) {
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
