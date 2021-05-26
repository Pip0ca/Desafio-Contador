let secondary
 = document.querySelector('.secund');//reconhecendo a div .secund no Java
let initial = document.querySelector('.inicial');//reconhecendo a div inicial no Java

function contagem() {
	initial.style.display = "none";
	secondary.style.display = "block";

	let inputData = document.getElementById("dateCont");

	let dateToReach = new Date(inputData.value);

	let MsDay = 86400000;
	let Hours = 24;
	let Minutes = 60;
	let Seconds = 60;

	setInterval(() => {
		let actualDate = new Date();
		let time = Math.abs(dateToReach.getTime() - actualDate.getTime());
		let Left = (time / MsDay).toString().split(".");
		let DaysLeft = parseInt(Left[0]);
		let HoursLeft = Hours - actualDate.getHours();
		let MinutesLeft = Minutes - actualDate.getMinutes();
		let SecondsLeft = Seconds - actualDate.getSeconds();

		document.getElementById("diaSp").innerText =
			DaysLeft < 10 ? `0${DaysLeft}` : DaysLeft;

		document.getElementById("horaSp").innerText =
			HoursLeft < 10 ? `0${HoursLeft}` : HoursLeft;

		document.getElementById("minSp").innerText =
			MinutesLeft < 10 ? `0${MinutesLeft}` : MinutesLeft;

		document.getElementById("segSp").innerText =
			SecondsLeft < 10 ? `0${SecondsLeft}` : SecondsLeft;

		console.log([SecondsLeft, actualDate.getSeconds()]);
	}, 1000);
}

function reninciar(){
  let btnRen = document.getElementById('btnRen')//reconhecendo o botão btnRen no Java

  initial.style.display = 'block'
  secondary.style.display = 'none'
  // Ao clicar em contagem o div inicial fica visivel e a div secund fica invisivel
}