const SendValid = () =>{
  const xhr = new XMLHttpRequest()
  const data = document.getElementById('formHub')

  function validar(){
    if(data.email.value != 0){
      Swal.fire(
        'Correo enviado',
        'Gracias por subscribirte',
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
        console.log(xhr.responseText)
      }else{
        console.log('Error en la peticion: '+xhr.status)
      }
    }
    xhr.send(form)
    data.reset()
  })
}


export {SendValid}
