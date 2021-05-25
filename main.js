let secund = document.querySelector('.secund')//reconhecendo a div .secund no Java
let inicial = document.querySelector('.inicial')//reconhecendo a div inicial no Java

function contagem(){
  let btnCont = document.getElementById('btnCont') //reconhecendo o botão btnCont no Java
  let DataPassada = document.getElementById('date').value 
  let diaSp = document.getElementById('diaSp')
  let horaSp = document.getElementById('horaSp')
  let minSp = document.getElementById('minSp')
  let segSp = document.getElementById('segSp')

  inicial.style.display = 'none'
  secund.style.display = 'block'
  // Ao clicar em contagem o div inicial fica invisivel e a div secund fica visivel
 var DataIn = new Date(inicial)
 var date = new Date();
	//data atual formatada para MM/DD/AAAA
  DataHoje = new Date(((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear()));
 
  var difTempo = Math.abs(DataHoje.getTime()-DataIn.getTime())
  var difDias = Math.floor(difTempo/(1000*3600*24))
  var difHour = Math.floor(difTempo/(1000*3600))
  var difMin = Math.floor(difTempo/(1000*60))
  var difSeg = Math.floor(difTempo/(1000))
  
 

}

function reninciar(){
  let btnRen = document.getElementById('btnRen')//reconhecendo o botão btnRen no Java

  inicial.style.display = 'block'
  secund.style.display = 'none'
  // Ao clicar em contagem o div inicial fica visivel e a div secund fica invisivel
}