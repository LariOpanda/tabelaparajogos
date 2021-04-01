console.log("jogo")



var dani = {
    nome: "Dani",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
  }
  var lari = {
    nome: "Lari",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
  }
  //console.log(lari.pontos)
  //console.log(dani.pontos)
  lari.pontos = calculaPontos(lari)
  dani.pontos = calculaPontos(dani)
  //console.log(lari.pontos)
  //console.log(dani.pontos)
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    console.log(pontos)
    return pontos
   }
  
  var jogadores = [dani, lari]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i ++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td><tr>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
     }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogadores.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogadores.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogadores.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
  }
  
              