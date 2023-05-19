# Rastreamento-de-Veiculos
Projeto em desenvolvimento para fins de estudo, utilizando HTML, CSS e JS 

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="/img/CadastrodeVeiculoslogo.png" type="image/x-icon">
    <title>Login</title>
</head>
<body>
    <header class="header">
		<div class="container">
		<div class="btn-menu">
		</div>
			<nav class="menu">
				
                <a href="/Cadastro de Veiculos/CadastroVeiculos.html">Cadastro Veiculos
                </a>
				<a href="/Pagina ADM/Adm.html">Adiministração Veiculos</a>
				
                <a href="/Suporte/suporte.html"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                    <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                  </svg>
                </a>
                
                <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </a>
			</nav>
		</div>
	</header>
    <section class="area-login">
        <div class="login">
            <div>
                <img src="/img/CadastrodeVeiculoslogo.png">
            </div>

            <form id="login-form">
                <input type="name" id="nome" name="nome" placeholder="Nome de Usuário" autocomplete="off" required>
                <input type="password" id="senha" name="senha" placeholder="Digite sua Senha" autocomplete="off" required>
                <input type="submit" value="Login">
            </form>
            <p>Já possui um cadastro?<a href="/Cadastro/Cadastro.html"> Cadastra-se</a></p>
        </div>
    </section>

    <script type="text/javascript" src="BackendL.js"></script>
</body>
</html>
