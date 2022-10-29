const cidade = document.getElementById('cidade')

const logradouro = document.getElementById('endereco')

const estado = document.getElementById('estado')

const bairro = document.getElementById('bairro')

const mensagemErro = document.getElementById('erro')

const cep = document.getElementById('cep')
cep.addEventListener('focusout', () => buscaEndereco(cep.value))

async function buscaEndereco(cep) {
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultaCEPConvertida = await consultaCEP.json()
    if (consultaCEPConvertida.erro) {
      throw Error('CEP não existente')
    }
    preencheCamposEndereco(consultaCEPConvertida)
    mensagemErro.innerHTML = ''
    return consultaCEPConvertida
  } catch (erro) {
    mensagemErro.innerHTML = `<p style="margin:10px; color:#D2001A;">CEP inválido. Tente novamente!</p>`
    console.log(erro)
  }
}

function preencheCamposEndereco(endereco) {
  cidade.value = endereco.localidade
  logradouro.value = endereco.logradouro
  estado.value = endereco.uf
  bairro.value = endereco.bairro
}

// let ceps = ['01001000', '01001001']
// let conjuntosCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntosCeps).then(respostas => console.log(respostas))
