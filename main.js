let secondary = document.querySelector('.secund');//reconhecendo a div .secund no Java
let initial = document.querySelector('.inicial');//reconhecendo a div inicial no Java
let inputData = document.getElementById("dateCont");// reconhecendo a div inpuDate no Java

function contagem() {
	initial.style.display = "none";//deixa a tela initial 
	secondary.style.display = "block";// deixa a tela secondary visivel

	let dateToReach = new Date(inputData.value);// criando uma variavel em forma de Date com o valor do inputDate

	let MsDay = 86400000;
	let Hours = 24;
	let Minutes = 60;
	let Seconds = 60;

	  setInterval(() => {
		let actualDate = new Date();//data atual
		let time = Math.abs(dateToReach.getTime() - actualDate.getTime());//diferença da data passada da data atual
		let Left = (time / MsDay).toString().split(".");// organizando a diferença de tempo 
		let DaysLeft = parseInt(Left[0]);// dias de diferença
		let HoursLeft = Hours - actualDate.getHours();// horas de diferença
		let MinutesLeft = Minutes - actualDate.getMinutes();// minutos de diferença
		let SecondsLeft = Seconds - actualDate.getSeconds();// segundos de diferença

		document.getElementById("diaSp").innerText =
			DaysLeft < 10 ? `0${DaysLeft}` : DaysLeft;// escreva em dia Sp = se DaysLast for menor que 10 faça 0+DaysLast se não DaysLast

		document.getElementById("horaSp").innerText =
			HoursLeft < 10 ? `0${HoursLeft}` : HoursLeft;// escreva em hora Sp = se HoursLast for menor que 10 faça 0+HoursLast se não HoursLast

		document.getElementById("minSp").innerText =
			MinutesLeft < 10 ? `0${MinutesLeft}` : MinutesLeft;// escreva em min Sp = se MinutesLast for menor que 10 faça 0+MinutesLast se não MinutesLast

		document.getElementById("segSp").innerText =
			SecondsLeft < 10 ? `0${SecondsLeft}` : SecondsLeft;// escreva em seg Sp = se SecondsLast for menor que 10 faça 0+SecondsLast se não SecondsLast

		console.log([SecondsLeft, actualDate.getSeconds()]);
	}, 1000);
}

function reninciar(){
  let btnRen = document.getElementById('btnRen');//reconhecendo o botão btnRen no Java

  initial.style.display = 'block';
  secondary.style.display = 'none';
  // Ao clicar em contagem o div inicial fica visivel e a div secund fica invisivel
  clearInterval() ;
}