function tocaSom (seletorAudio) {
 const elemento = document.querySelector(seletorAudio);  

  if (elemento && elemento.localName === 'audio'){
    elemento.play(); 
  } 
 else {
  //alert ('Elemento nao encontrado ou seletor invàlido');
  console.log ('Elemento nao encontrado ou seletor invàlido');
 }

}
const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto 
//while (contador < ListaDeTeclas. length) {}

//para 
for (let contador = 0; contador < ListaDeTeclas.length; contador++){

  const tecla = ListaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idaudio = `#som_${instrumento}`; //template string

//console.log(idaudio);

tecla. onclick = function (){
  tocaSom (idaudio);
}

tecla.onkeydown = function (evento){
  
  //se
  if (evento.code === 'Space' || evento.code === 'Enter' ){
    tecla.classList.add('ativa');
  }
 
}

tecla.onkeyup = function(){
  tecla.classList.remove('ativa');

}

}

