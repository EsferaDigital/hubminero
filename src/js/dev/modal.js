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

export {
  printModal,
  printModalClasic
}
