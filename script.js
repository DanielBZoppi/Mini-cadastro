window.onload = init;

function init(){
  if("form" in localStorage){
    carregaForm();
  }
  setInterval(autosave,5000);
}

function carregaForm(){
  var form = JSON.parse( localStorage.getItem("form") );
  document.getElementById("pNome").value = form.pnome;
  document.getElementById("sNome").value = form.snome;
  document.getElementById("sCV").value = form.conteudo;
  alert("Dados do último acesso carregados. Se quiser, aperte limpar para apagá-los.");
}

function autosave(){
  console.log("Deveria salvar agora.");
  var primeiro = document.getElementById("pNome").value;
  var sobre = document.getElementById("sNome").value;
  var cv = document.getElementById("sCV").value;

  console.log(primeiro, sobre, cv);

  var form = {
      pnome : primeiro,
      snome : sobre,
      conteudo : cv
    };
  
  localStorage.setItem("form", JSON.stringify(form) );
}

