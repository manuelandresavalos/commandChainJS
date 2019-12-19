class Commander {
	constructor() {}

	commands(stringCommands) {
		let actionsArr = stringCommands.split(' ');
		actionsArr.forEach((action) => {
			if (actions[action]) {
				actions[action]();
			}
			else {
				console.log(`%c Action [${action}] not found`, 'color:blue');
			}
		});
	}
}
