function user1() {
  document.getElementById("panel1").style.display = "block";
}
function show1() {
  document.getElementById("panel1").style.display = "none";
}
function myFunction() {
  document.getElementById("panel2").style.display = "block";
}
function show() {
  document.getElementById("panel2").style.display = "none";
}
function pop() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("style");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function create() {
  var message;
  cell1 = document.getElementById("fname").value.filter(Number);
  cell2 = document.getElementById("lname").value.filter(Number);
  
  message = document.getElementById("p1");

  try {
    if (cell1 == "") throw "empty";
    if (cell2 == "") throw "empty";
    if ((cell1 = Number)) throw "Do not enter a number";
    if ((cell2 = Number)) throw "Do not enter a number";
  } catch (error) {
    message.innerHTML = "input is " + error;
    message.innerHTML = "Do not enter a number";
  }

  if (isNaN(cell1) == "" || cell2 == "") {
    alert("input empty");
  } else {
    var table = document.getElementById("style");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("fname").value;
    cell2.innerHTML = document.getElementById("lname").value;
  }
}
function clearinput() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
}
