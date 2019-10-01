const printModal = (bm,createModal,content) =>{
  bm.addEventListener('click', () =>{
    createModal(`${content}`)
  })
}

const printModalClasic = (open,modal,close) =>{
  open.addEventListener('click', () =>{
    modal.classList.toggle('zoomin')
    modal.classList.remove('zoomout')
  })
  close.addEventListener('click', () =>{
    modal.classList.replace('zoomin', 'zoomout')
  })
}

const printFormModal = (modal, close) =>{
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      // let modal = document.getElementById('Modal')
      modal.classList.toggle('zoom-in')
      modal.classList.remove('zoom-out')
      console.log('entro')
    }, 3000)
  })
  close.addEventListener('click', ()=>{
    modal.classList.replace('zoom-in', 'zoom-out')
  })
}



export {
  printModal,
  printModalClasic,
  printFormModal
}
