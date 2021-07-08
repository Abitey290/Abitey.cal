function one() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "1";
               }
               function two() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "2";
               }
               function three() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "3";
               }
               function four() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "4";
               }
               function five() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "5";
               }
               function six() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "6";
               }
               function seven() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "7";
               }
               function eight() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "8";
               }
               function nine() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "9";
               }
               function AC() {
                 var a = document.getElementById("i1");
                 a.value = "";
               }
               
               function add() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "+";
               }
               
               function sub() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "-";
               }
               
               function multiply() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "*";
               }
               
               function mod() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "0";
               }
               
               function division() {
                 var a = document.getElementById("i1");
                 a.value = a.value + "/";
               }
               
               function myfun() {
                 var a = document.getElementById("i1").value;
                 if (a == "") {
                   alert("First Enter");
                   var a = document.getElementById("i1");
                   return;
                 } else if (a == "shubham") {
                   alert("Designeed by Shubham Bhosale");
                   var a = document.getElementById("i1");
                   a.value = "";
                   return;
                 } else if (a == "119") {
                   alert("s");
               
                   return;
                 }
               
                 var inputt = eval(a);
                 var a = document.getElementById("i1");
                 a.value = inputt;
               }