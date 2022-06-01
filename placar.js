let scoreBoard = null; // array responsável por manter o placar.

const placar = [{"Pixelito": 1000000}];

function createScoreBoard() {
  return placar
}

function addPlayer(nome, pontuacao) {
  let incluido = false
  placar.forEach(jogador => {
    if (nome in jogador) {
      incluido = true
    }})
  if (!incluido) {
    jogador = {}
    jogador[nome] = pontuacao
    placar.push(jogador)
  } else {
    console.log("Jogador já cadastrado!")
  }
}

function removePlayer(nome) {
  placar.map( (item, index) => {
    if (Object.keys(item)[0] == nome) {
      placar.splice(index, 1)
    }
  })
}

function updateScore(nome, pontos) {
  var cadastrado = false
  placar.forEach((jogador, index) => {
    let nomeJogador = Object.keys(jogador)
    if(nomeJogador == nome) {
      placar[index][nomeJogador] += pontos
      cadastrado = true
    }
  })
  if (!cadastrado) {
    console.log("Jogador não cadastrado")
  }}
  
  function applyBonus() {
    placar.forEach((jogador, index) => {
      let nome = Object.keys(jogador)
      placar[index][nome] += 50
    })
  }
  
  function listScoreBoard() {
    for (let i=0; i<placar.length; i++) {
      for(let j=i+1; j<placar.length; j++) {
        var Jog1 = Object.values(placar[i])[0]
        var Jog2 = Object.values(placar[j])[0]
        if (Jog2 > Jog1) {
          let meio = placar[i]
          placar[i] = placar[j]
          placar[j] = meio
        }
      }
    }
    placar.map((jogador, index) => {
      let nomeJogador = Object.keys(jogador)[0]
      let pontuacao = Object.values(jogador)[0]
      console.log(`${index+1}. ${nomeJogador} - ${pontuacao}`)
    })
  }


createScoreBoard();
addPlayer("Higor", 150);
addPlayer("Jefferson", 200);
addPlayer("Stephan", 111);
removePlayer("Jefferson");
updateScore("Higor", 100);
applyBonus();
listScoreBoard();
// Retorno esperado:
// 1. Higor - 250 pontos
// 2. Stephan - 111 pontos