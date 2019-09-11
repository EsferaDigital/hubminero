// Para usar esta funcion necesitamos una mediaquerie (mq, que guardo en lib/var-basicas), un elemento contenedor del mapa en el DOM (mpC, cuya variable guardo en assets/var-content), el iframe del mapa de google (mpG, que guardo en assets/var-content) y un elemento que contiene una imagen del mapa con un link al mapa pensado para moviles (mpImg, que guardo en assets/var-content)

const Mapa = (mq, mpC, mpG, mpImg) =>{
  if(mq.matches){
    mpC.innerHTML = mpG
  } else{
    mpC.innerHTML = mpImg
  }
}

export {Mapa}
