var btnInn = document.getElementById("btnInn");
    var tekstUt = document.getElementById("tekstUt");
    var antall = 0;

    
    btnInn.onclick = function(){
        if(antall<300){
            antall++;
            tekstUt.innerHTML="Det er nå "+antall+" elever i lokalet";
        }
        else{
            tekstUt.innerHTML="Det er nå "+antall+" elever i lokalet";
        }
    }
