var date= document.getElementById("dateCont")
var contagem = document.querySelector(".secund")

date.addEventListener('click', function() {
  if(secund.style.display === 'block'){
secund.style.display = 'none'
  }else {
    secund.style.display='block'
  }

})

function contagem(){

  var dateAct = new Date()
  var hour = dateAct.getHours()
  var min = dateAct.getMinutes()
  var sec = dateAct.getSeconds()
}