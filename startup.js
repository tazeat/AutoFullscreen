function onError(error) {
	console.log(`Error: ${error}`);
}

console.log(`AutoFullscreen Running`);
browser.windows.getCurrent().then((currentWindow) => {
	browser.windows.update(currentWindow.id, {state: "fullscreen"});
});