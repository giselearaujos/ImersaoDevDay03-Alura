var button = document.querySelector('#btn');
var fraseCerta = "04";
var tentativas = 3
var denovo = "Tente de novamente. Tentativas restantes: "

btn.onclick = () => {

  var escolha = document.getElementById("opcao").value;

  if (tentativas > 0) {
    if (fraseCerta == escolha) {
      document.getElementById("retorno").innerHTML = "Parabéns!"
    } else {
      tentativas--
      document.getElementById("retorno").innerHTML = denovo + tentativas
    }
  }
  if (tentativas == 0) {
    document.getElementById("retorno").innerHTML = "Você perdeu!"
  }
}