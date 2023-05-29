const formLogin = document.querySelector('form');

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = formLogin.querySelector('input[name="nome"]').value;
  const senha = formLogin.querySelector('input[name="senha"]').value;

  const nomeCadastrado = localStorage.getItem('nome');
  const senhaCadastrada = localStorage.getItem('senha');

  if (nome !== nomeCadastrado || senha !== senhaCadastrada) {
    alert('Nome de usuário ou senha inválidos');
    return;
  }

  alert('Login realizado com sucesso!');
  formLogin.reset();
  window.location.href = '/Cadastro de Veiculos/index.html';
});


function mostrarSenha(){
  var tipo = document.getElementById("senha");
  if(tipo.type == "password"){
    tipo.type = "text";
  }else{
    tipo.type = "password";
  }
}