var corinthians = {
    nome: "Corinthians",
    vitorias: 3,
    empates: 2,
    derrotas: 0,
    pontos: 0
  };
  
  var saopaulo = {
    nome: "São Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  
  function calculaPontos(timeReferencia) {
    var pontos = timeReferencia.vitorias * 3 + timeReferencia.empates;
    return pontos;
  }
  
  var listaTimes = [corinthians, saopaulo];
  
  function exibirTabelaDePontos(times) {
    var html = "";
    for (i = 0; i < times.length; i++) {
      html += "<tr><td>" + times[i].nome + "</td>";
      html += "<td>" + times[i].vitorias + "</td>";
      html += "<td>" + times[i].empates + "</td>";
      html += "<td>" + times[i].derrotas + "</td>";
      html += "<td>" + times[i].pontos + "</td>";
    }
    var tabelaTimes = document.getElementById("tabelaJogadores");
    tabelaTimes.innerHTML = html;
  }
  
  function exibeRodadasNaTela(times) {
    var html = "";
    for (i = 0; i < times.length; i++) {
      html += "<tr><td>" + times[i].nome + "</td>";
      html +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      html +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      html +=
        "<td><button onClick='adicionarDerrota(" +
        i +
        ")'>Derrota</button></td></tr>";
    }
    var tabelaRodadas = document.getElementById("tabelaRodadas");
    tabelaRodadas.innerHTML = html;
  }
  
  
  
  var contagemDeJogos = 0;
  function adicionarVitoria(i) {
    var times = listaTimes[i];
    if (contagemDeJogos < 1) {
      contagem++;
      times.vitorias++;
      times.pontos = calculaPontos(times);
      exibirTabelaDePontos(listaTimes);
    } else {
      alert("Esse jogo já ocorreu");
    }
  }
  function adicionarEmpate(i) {
    var times = listaTimes[i];
    if (contagemDeJogos < 1) {
      contagemDeJogos++;
      times.empates++;
      times.pontos = calculaPontos(times);
      exibirTabelaDePontos(listaTimes);
    } else {
      alert("Esse jogo já ocorreu");
    }
  }
  function adicionarDerrota(i) {
    var times = listaTimes[i];
    if (contagemDeJogos < 1) {
      times.derrotas++;
      exibirTabelaDePontos(listaTimes);
    } else {
      alert("esse jogo já ocorreu");
    }
  }

  function verificaCampoDigitado(){
      var input = document.querySelector('input');
      var valor = input.value;
      return valor;
  }
  function apertouBotao(){
    var botao = document.querySelector('button');
    exibirTabelaDePontos(listaTimes);
    exibeRodadasNaTela(listaTimes);

  }

  botao.onclick = apertouBotao;