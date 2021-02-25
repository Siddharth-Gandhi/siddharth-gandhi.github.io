const birthYear = 2001;
const currentYear = new Date().getFullYear();
const age =
	new Date() > new Date(`11/24/${currentYear}`)
		? currentYear - birthYear
		: currentYear - birthYear - 1;
document.getElementById("age").innerText = `${age}`;
__dirname;
