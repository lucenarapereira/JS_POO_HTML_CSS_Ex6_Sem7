var cep = document.querySelector('#cep');
var botao = document.getElementById('botao');
var paragrafo = document.getElementById('paragrafo');

botao.addEventListener ("click", () => {
  //console.log(cep.value, botao)

  fetch(`https://viacep.com.br/ws/${cep.value}/json`)
  .then(function(response) {    
      response.json()

  .then(function(result) {
     console.log(result)
      paragrafo.innerHTML= 
        ` Cidade: ${result.localidade} <br>
          Bairro: ${result.bairro}  <br>
          Rua: ${result.logradouro} 
        `
  })
  })
})


