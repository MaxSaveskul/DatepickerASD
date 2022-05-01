
document.querySelector('.dark-mode-switch').onclick = () => {
	document.querySelector('body').classList.toggle('dark');
	document.querySelector('body').classList.toggle('light');
}

const calendarDivs = document.querySelectorAll('.calendar-days div');
calendarDivs.forEach(div =>
	div.onclick = function (e) {
		calendarDivs.forEach(cDiv => {
			cDiv.classList[e.target === cDiv ? 'add' : 'remove']('blue');
		})
		document.getElementById('calendar-input').value = `${e.target.innerText}.02.2021`
	}
)

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("choose")[0];

btn.onclick = function () {
	modal.style.display = "block";
}

span.onclick = function () {
	modal.style.display = "none";
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}