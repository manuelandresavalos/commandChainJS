var actions = new Actions();

var stringCommands = 'saludar caminar dormir despertar';

var actionsArr = stringCommands.split(' ');
actionsArr.forEach((action) => {
	if (actions[action]) {
		actions[action]();
	}
	else {
		console.log(`Action [${action}] not found`);
	}
});
