var openRegister = document.getElementById("openWorld");
var openRegister2 = document.getElementById("openMap");
var openRegister3 = document.getElementById("openInformation");



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
    
    if(registro2.style.display === "none"){
        registro2.style.display = "block";
    }else{
        registro2.style.display = "none";
    }

});

openRegister3.addEventListener("click",()=>{

    var registro3 = document.getElementById("information");
    
    if(registro3.style.display === "none"){
        registro3.style.display = "block";
    }else{
        registro3.style.display = "none";
    }

});




// ****************js-cadastros**************

var cadastro = [];

document.querySelector('button.cadastro').addEventListener('click',()=>{
    var nomePessoa = document.querySelector('input[name=name_pessoa]');
    var dataNascimento = document.querySelector('input[name=date_dn]');
    
   cadastro.push({
    nome: nomePessoa.value,
    data: dataNascimento.value
   });

   let dadosPessoas = document.querySelector('list-box');
   dadosPessoas.innerHTML = "";

   cadastro.map(function(val){
    dadosPessoas.innerHTML+= `
    <div class="list-single">
     <h3>`+val.nome+`</h3>
     <h3 class="date-new">`+val.data+`</h3>
    </div><!--list-single-->
    `;
   
   
    
   })

});



