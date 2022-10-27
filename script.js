async function buscaEndereco(cep) {
  try {
    const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultaCEPConvertida = await consultaCEP.json()
    if (consultaCEPConvertida.erro) {
      throw Error('CEP não existente')
    }
    return consultaCEPConvertida
  } catch (erro) {
    console.log(erro)
  }
}
// let ceps = ['01001000', '01001001']
// let conjuntosCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntosCeps).then(respostas => console.log(respostas))
