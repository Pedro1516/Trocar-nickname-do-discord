//Muda o nome a cada 5 minutos

client.on('ready', () => {
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


