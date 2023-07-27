const button = document.querySelector(".btn");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

const daysInEachMonth = [
	31, // January
	28, // February (assuming non-leap year)
	31, // March
	30, // April
	31, // May
	30, // June
	31, // July
	31, // August
	30, // September
	31, // October
	30, // November
	31, // December
];

month.addEventListener("input", (e) => {
	e.preventDefault();
	const monthArrNum = month.value - 1;
	const daysOfTheMonth = daysInEachMonth[monthArrNum];
	if (daysOfTheMonth === day.getAttribute("max")) return;
	else {
		day.setAttribute("max", daysOfTheMonth);
	}
	console.log(day.getAttribute("max"));
});

const showYear = document.querySelector(".years");
const showMonth = document.querySelector(".months");
const showDay = document.querySelector(".days");

button.addEventListener("click", () => {
	const currentDate = new Date();

	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	let years = Number(currentYear - year.value);
	let months = Number(currentMonth - month.value);
	let days = currentDay - day.value;

	console.log(years);

	if (month.value >= currentMonth) {
		if (day >= currentDay) {
			return;
		} else {
			years = currentYear - (Number(year.value) + 1);
		}
	}

	if (months < 0) {
		months = 12 + (currentMonth - month.value);
	}

	if (day.value >= currentDay) {
		days = daysInEachMonth[currentMonth] + (currentDay - day.value);
	}

	console.log(years, year.value, currentYear);

	showYear.textContent = years;
	showMonth.textContent = months;
	showDay.textContent = days;
});
