// **************DOM******************

// var h3 = document.getElementsByTagName('h3');

// h3[2].innerHTML = 'Hackeado';

// for(var i = 0; i < h3.length; i++){
//     h3[i].innerHTML = 'Hackeado! -' ;
// }


var openRegister = document.getElementById("openWorld");
var openRegister2 = document.getElementById("openMap");

openRegister.addEventListener("click",()=>{

    var registro = document.getElementById("world");
    

    if(registro.style.display === "none"){
        registro.style.display = "block";
    }else{
        registro.style.display = "none";
            
        }
});   

openRegister2.addEventListener("click",()=>{

    var registro2 = document.getElementById("map");
    var registro = document.getElementById("world");

    if(registro.style.display === "none" && registro2.style.display ==="none"){
        registro2.style.display = "block"; 
    }else if
    (registro.style.display === "block" && registro2.style.display ==="block"){
        registro2.style.display = "none"; 
       
    }else{
        registro2.style.display = "none";
    
    } 
});











