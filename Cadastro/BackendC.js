const formCadastro = document.querySelector('form');

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = formCadastro.querySelector('input[name="nome"]').value;
  const senha = formCadastro.querySelector('input[name="senha"]').value;
  const confirmarSenha = formCadastro.querySelector('input[name="confirmar-senha"]').value;

  if (senha !== confirmarSenha) {
    alert('As senhas informadas não conferem');
    return;
  }

  localStorage.setItem('nome', nome);
  localStorage.setItem('senha', senha);

  alert('Cadastro realizado com sucesso!');
  formCadastro.reset();
});
