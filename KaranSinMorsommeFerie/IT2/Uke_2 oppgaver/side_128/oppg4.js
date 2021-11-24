var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var bilde = document.getElementById("bilde");
    function visBilde(evt){
        var knapp = evt.target;
        if(knapp.id==="btn1"){
            bilde.innerHTML='<img src="bildefil1.jpg">';//Bildefila må ligge i samme mappe som denne html-fila.
        }
        else{
            bilde.innerHTML='<img src="bildefil2.png">';//Bildefila må ligge i samme mappe som denne html-fila.
        }
    }
    btn1.onclick = visBilde;
    btn2.onclick = visBilde;


/*
<button id="btn1" data-bilde="bilde1.jpg">Vis bilde1</button>
<button id="btn2" data-bilde="bilde2.jpg">Vis bilde2</button>
<div id="bilde"></div>
<script>
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var bilde = document.getElementById("bilde");
    function visBilde(evt){
        var knapp = evt.target;
        var bildefil = knapp.getAttribute("data-bilde");
        bilde.innerHTML='<img src='+bildefil+'>';//Bildefilene må ligge i samme mappe som denne html-fila.
    }
    btn1.onclick = visBilde;
    btn2.onclick = visBilde;
    */
