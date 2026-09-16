const button = document.querySelector('button');
button.addEventListener('click', function(){
    console.log(inputNome.value)
    const newuser = {
        nome: inputNome.value,
        tipo: "2",
        email: "usario@gmail.com",
        senha: "87654321"
    }
    criarusuario(newuser);
})

const inputNome = document.querySelector('[name ="nome"]')

function criarusuario(DadoUsuario) {
    fetch("http://localhost:3000/users",{
       method:"POST",
      body: JSON.stringify(DadoUsuario)
    });
}

