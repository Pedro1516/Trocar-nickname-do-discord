//Muda o nome a cada 5 minutos

client.on('ready', () => {
  const horario = new Date()
  let i = 0
  let nomes = [/*lista de nomes*/]

    const mudarNome = setInterval(() => {
      const servidor = client.guilds.cache.get(/*Id do servidor*/)
      const eu = servidor.members.fetch(/*Id do usuario*/)
        .then(obj => {
          obj.setNickname(nomes[i])
        })

        .catch(console.error)

      i++
      if(i > nomes.length){i = 0}
  }, 300000)

})


//Aumenta o nickname em 1 a cada segundo (SE O USERNAME FOR APENAS NUMEROS)

client.on('ready', () => {
setInterval(() => {
    const servidor = client.guilds.cache.get(/*Id do servidor*/)
    const usuario = servidor.members.fetch(/*Id do usuario*/)
      .then(obj => {
        let nick = Number(obj.nickname)
        nick++

        obj.setNickname(nick)
        obj.nickname = nick
        console.log(obj)

      })

  }, 1000)
  }
