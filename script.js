const formulario = document.forms[0]

const dados = {}

function verificar(event) {
  let valor = event.target
  dados[event.target.name] = event.target.value
  if (!valor.checkValidity()) {
    valor.classList.add('invalido')
    formulario.email.setCustomValidity('Por favor, coloque o @')
    valor.nextElementSibling.innerText = valor.validationMessage
  } else {
    valor.classList.remove('invalido')
  }
}

formulario.addEventListener('change', verificar)
