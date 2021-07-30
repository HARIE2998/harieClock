var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

function setClockTime(){
	const day= new Date();
	const hh = day.getHours();  //0 to 23
	const mm = day.getMinutes(); //0 to 59
	const ss = day.getSeconds(); //0 to 59

	const hourDeg = (hh * 30) + (mm * 0.5); //every 60 min, 30Deg then 30/60 = 0.5 per minute
	const minuteDeg = (mm * 6) + (ss * 0.1); //every 60 second, 6Deg then 6/60 = 0.1 per second
	const secondDeg = (ss * 6);

	hour.style.transform = `rotatez(${hourDeg}deg)`;
	minute.style.transform = `rotatez(${minuteDeg}deg)`;
	second.style.transform = `rotatez(${secondDeg}deg)`;
}

setClockTime();
setInterval(setClockTime,1000);