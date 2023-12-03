const showCircle = (x, y, radius) => {
	return new Promise(function(resolve, reject) {
		const div = "circle-thingy";
		setTimeout(() => resolve(div), 2000);
	});
}

showCircle(150, 150, 100).then(div => {
  // div.classList.add('message-ball');
	console.log(`${div} was computed`);
});
