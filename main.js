let btnCont = document.getElementById('btnCont') //reconhecendo o botão btnCont no Java
let btnRen = document.getElementById('btnRen')//reconhecendo o botão btnRen no Java
let secund = document.querySelector('.secund')//reconhecendo a div .secund no Java
let inicial = document.querySelector('.inicial')//reconhecendo a div inicial no Java

function contagem(){
  inicial.style.display = 'none'
  secund.style.display = 'block'
  // Ao clicar em contagem o div inicial fica invisivel e a div secund fica visivel
}

function reninciar(){
  inicial.style.display = 'block'
  secund.style.display = 'none'
  // Ao clicar em contagem o div inicial fica visivel e a div secund fica invisivel
}
