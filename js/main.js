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

class Pessoas {
    constructor(){
        this.id = 1;
        this.arrayPessoas = [];
        
    }

    salvar(){
      let pesoa = this.lerDados(); 

      if(this.validaCampos(pessoa)){
        alert('Salvar');
      }
      
      console.log(pessoa);
    }

    lerDados(){
      let pessoas = {}

      pessoa.id = this.id;
      pessoa.nomePessoa = document.getElementById('name_pessoa').value;
      pessoa.idadePessoa = document.getElementById('idade').value;
      pessoa.dataPessoa = document.getElementById('date_dn').value;
      pessoa.rgPessoa = document.getElementById('rg').value;
      pessoa.telPessoa = document.getElementById('cel').value;
      pessoa.emailPessoa = document.getElementById('email').value;
      
      return pessoa;
    }

    validaCampos(){
        let msg = '';

        if(pessoa.nomePessoa == ''){
            msg += '- Informe o Nome da Pesssoa \n';
        }
        if(pessoa.idadePessoa == ''){
            msg += '- Informe a Idade da Pesssoa \n';
        }
        if(pessoa.dataPessoa == ''){
            msg += '- Informe a Data de Nascimento da Pesssoa \n';
        }
        if(pessoa.rgPessoa == ''){
            msg += '- Informe o RG da Pesssoa \n';
        }
        if(pessoa.telPessoa == ''){
            msg += '- Informe o Telefone da Pesssoa \n';
        }
        if(pessoa.emailPessoa == ''){
            msg += '- Informe o e-maill da Pesssoa \n';
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }

    cancelar(){
        alert('cancelado');
    }


}

var pessoa = new Pessoas();



