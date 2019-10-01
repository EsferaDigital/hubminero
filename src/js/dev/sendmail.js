import { MODAL } from "../assets/var-modal"

const SendValid = () =>{
  const xhr = new XMLHttpRequest()
  const data = document.getElementById('formHub')

  function validar(){
    if(data.email.value != 0){
      Swal.fire(
        'Correo enviado',
        'Gracias por escribirnos',
        'success'
      )
    }
  }

  data.addEventListener('submit', e =>{
    e.preventDefault()
    validar()
    const form = new FormData(data)
    xhr.open('POST', 'enviar.php')
    xhr.onload = () =>{
      if(xhr.status == 200){
        console.log('Enviado correctamente')
      }else{
        console.log('Error en la peticion: '+xhr.status)
      }
    }
    xhr.send(form)
    data.reset()
  })
}

const SENDMAIL = () =>{
  const XHR = new XMLHttpRequest()
  const DATA = document.getElementById('formPop')

  function valida(){
    if(DATA.correo.value != 0){
      Swal.fire(
        'Correo enviado',
        'Gracias por subscribirte',
        'success'
      )
    }
  }

  DATA.addEventListener('submit', e =>{
    e.preventDefault()
    valida()
    MODAL.classList.replace('zoom-in', 'zoom-out')

    const FORM = new FormData(DATA)
    XHR.open('POST', 'enviamail.php')
    XHR.onload = () =>{
      if(XHR.status == 200){
        console.log('Enviado correctamente')
      }else{
        console.log('Error en la peticion: '+xhr.status)
      }
    }
    XHR.send(FORM)
    DATA.reset()
  })
}


export {
  SendValid,
  SENDMAIL
}
