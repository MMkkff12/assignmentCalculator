function equal(){

    var a = document.getElementById("x").value ;
    var b = document.getElementById("y").value ;
    a = Number(b);
    document.getElementById("output").innerHTML = a;
}

function addequal(){

    var a = Number(document.getElementById("x").value) ;
    var b = Number(document.getElementById("y").value) ;
    a += b;

    document.getElementById("output").innerHTML = a;
}

function subequal(){

    var a = Number(document.getElementById("x").value) ;
    var b = Number(document.getElementById("y").value) ;
    var c;
    if(a < b){
        c= b %= a;
    }else{
        c = a %= b;}
    
    document.getElementById("output").innerHTML = c;
}

function mulequal(){

    var a = Number(document.getElementById("x").value) ;
    var b = Number(document.getElementById("y").value) ;
    a *= b;

    document.getElementById("output").innerHTML = a;
}

function divequal(){

    var a = Number(document.getElementById("x").value) ;
    var b = Number(document.getElementById("y").value) ;
    a /= b;

    document.getElementById("output").innerHTML = a;
}

function modequal(){

    var a = Number(document.getElementById("x").value) ;
    var b = Number(document.getElementById("y").value) ;
    var c;
    if(a < b){
        c= b %= a;
    }else{
        c = a %= b;}
    
    document.getElementById("output").innerHTML = c;
}