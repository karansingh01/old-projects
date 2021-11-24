// funksjon for å få dropdown av merker når man skal sortere varer etter merker er under her
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// Her slutter sortering av merker innenfor varer



// funksjon for å få dropdown av anledning når man skal sortere varer etter anledning er under her

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

function filterFunction2() {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown2");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// Her slutter sortering av anledning innenfor varer

// funksjon for å få dropdown av pris når man skal sortere varer etter prisr er under her


function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function filterFunction3() {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown3");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// Her slutter sortering av pris innenfor varer

// funksjon for å få dropdown av farge når man skal sortere varer etter farge er under her

function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}

function filterFunction4() {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown4");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// Her slutter sortering av farge innenfor varer
// funksjon for å få dropdown av forskjellige ting når man skal sortere varer etter forskjellige ting er under her

function myFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}
function filterFunction5() {
  var input, filter, ul, li, a, i;
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown5");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
// Her slutter sortering innenfor varer

// her er for knapper på om oss for å vise mer på siden om oss
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
// knapp for å gå tilsbake
function goBack() {
	window.history.back();
}
