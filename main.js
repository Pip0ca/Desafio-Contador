let btnCont = document.getElementById('btnCont') //reconhecendo o botão btnCont no Java
let btnRen = document.getElementById('btnRen')//reconhecendo o botão btnRen no Java
let secund = document.querySelector('.secund')//reconhecendo a div .secund no Java
let inicial = document.querySelector('.inicial')//reconhecendo a div inicial no Java

let DataPassada = document.getElementById('date').value 

function contagem(){
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
  var array_total = [difDias, (disHour%24), (difMin%60), (difSeg%60)]
 

}

function reninciar(){
  inicial.style.display = 'block'
  secund.style.display = 'none'
  // Ao clicar em contagem o div inicial fica visivel e a div secund fica invisivel
}