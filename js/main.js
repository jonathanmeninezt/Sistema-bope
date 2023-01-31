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
        this.id = 0;
        this.arrayPessoas = [];
        
    }

    salvar(){
      let pesoa = this.lerDados(); 

      if(this.validaCampos(pessoa)){
        this.adicionar(pessoa);
      }
      
      this.listaTabela();
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayPessoas.length; i++){
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_name_pessoa = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_date_dn = tr.insertCell();
            let td_rg = tr.insertCell();
            let td_cel = tr.insertCell();
            let td_email = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayPessoas[i].id;
            td_name_pessoa.innerText = this.arrayPessoas[i].nomePessoa;
            td_idade.innerText = this.arrayPessoas[i].idadePessoa;
            td_date_dn.innerText = this.arrayPessoas[i].dataPessoa;
            td_rg.innerText = this.arrayPessoas[i].rgPessoa;
            td_cel.innerText = this.arrayPessoas[i].celPessoa;
            td_email.innerText = this.arrayPessoas[i].emailPessoa;

            td_id.clasList.add('center');

            

            let imgEdit = document.createElement('img');
            imgEdit.src ='/img/edit.png';
            
            
            td_acoes.appendChild(imgEdit);
        }
    }

    adicionar(pessoa){
        this.arrayPessoas.push(pessoa);
        this.id++;
    }

    lerDados(){
      let pessoas = {}

      pessoa.id = this.id;
      pessoa.nomePessoa = document.getElementById('name_pessoa').value;
      pessoa.idadePessoa = document.getElementById('idade').value;
      pessoa.dataPessoa = document.getElementById('date_dn').value;
      pessoa.rgPessoa = document.getElementById('rg').value;
      pessoa.celPessoa = document.getElementById('cel').value;
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
        if(pessoa.celPessoa == ''){
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
        pessoa.nomePessoa = document.getElementById('name_pessoa').value = '';
        pessoa.idadePessoa = document.getElementById('idade').value = '';
        pessoa.dataPessoa = document.getElementById('date_dn').value = '';
        pessoa.rgPessoa = document.getElementById('rg').value = '';
        pessoa.celPessoa = document.getElementById('cel').value = '';
        pessoa.emailPessoa = document.getElementById('email').value = '';
        pessoa.cpfPessoa = document.getElementById('cpf').value = '';
        pessoa.telPessoa = document.getElementById('tel').value = '';
    }


}

var pessoa = new Pessoas();



