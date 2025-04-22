const texto = document.getElementById('texto')
const btnVerificar = document.getElementById('btnVerificar')
const resposta = document.getElementById('resultado')

// adiciando funcção ao botão
btnVerificar.addEventListener('click', veritificar);

// flag para controlar se o programa deve "sair"
let programaRodando= true;

function veritificar(){
  // limpando mensagens de erros anteriores
  resposta.textContent= ""

  // validando a entrada
  if(texto.value.trim()=== ""){
    resposta.innerHTML= '<span style="color: red">Digite uma palavra, ou "sim" / "não" para sair do programa</span>'
    document.getElementById('texto').focus()
    return;

  } else{
      // converter para letra minusculas
    const valordigitado= texto.value.trim().toLowerCase()

    //Verificação do sistema
    while(programaRodando){

      if(valordigitado === 'sim' || valordigitado === 'não' || valordigitado ==='nao'){
        // sair do loop
        programaRodando = false;

        resposta.innerHTML=`<p>Você digitou ${valordigitado}</p> 
        <p>O sistema será encerrado em <span id="contador">5</span> segundos...</p>`
        
        // iniciando contagem regressiva
        let contador= Number(5)
        const intervalId = setInterval(()=>{
          contador--
          document.getElementById('contador').textContent= contador;

          if(contador <=0){
            clearInterval(intervalId);
            // fecha a aba/janela atual
            window.close();

            // caso o navegador bloqueie o fechamento automatico
            document.body.innerHTML='<h1>Programa encerrado! você pode fechar essa aba agora.</h1>'
          }
        }, 1000);
        break; // garantindo que saia do loop
      }else{
        // mostrando valor digitado
        resposta.innerHTML= `<p>Você digitou "${valordigitado}" </p><p><span style="color: red" >Digite "sim", "não" ou "nao" para sair do programa</span></p>`
      }
      break; // para não criar um loop infinito
    }
  }
  //limpando o campo de texto após processar 
  texto.value= ''
  texto.focus()
}

