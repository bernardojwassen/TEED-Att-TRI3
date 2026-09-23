// Encontrar o botão na página
const button = document.querySelector('button');
const inputNome = document.querySelector('[name="nome"]');
const inputTipo = document.querySelector('[name="tipo"]');
const inputEmail = document.querySelector('[name="email"]');
const inputSenha = document.querySelector('[name="senha"]');

// Adicionar escuta do evento de 'click'
button.addEventListener('click', function () {
	const novoUsuario = {
		nome: inputNome.value,
		tipo: inputTipo.value, 
		email:inputEmail.value, 
		senha: inputSenha.value
	}

	console.log(novoUsuario)
	criarUsuario(novoUsuario)
})

function criarUsuario(dadoUsuario) {
	fetch("http://localhost:3000/users", {
		method: "POST",
		body: JSON.stringify(dadoUsuario)
	}).then(function (resposta){
		resposta.json().then(function (data){
			console.log(data)
		})
	});
}

function lerUsuario(dadoUsuario) {
	fetch("http://localhost:3000/users", {
		method: "GET",
	}).then(function (resposta){
		resposta.json().then(function (data){
			for(const usuario of data){
				criarhtml(usuario);
			}
		})
	});
}

function criarhtml(usuario){
	const divResultado = document.querySelector('.resultado');
	const divCriada = document.createElement('div');
	divCriada.classList.add('bloco');
	divCriada.innerHTML = `
		<h1>${usuario.nome}</h1>
        <h1>${usuario.tipo}</h1>
        <h1>${usuario.email}:</h1>
        <h1>${usuario.senha}</h1>
	`

	divResultado.append(divCriada)
}

lerUsuario()