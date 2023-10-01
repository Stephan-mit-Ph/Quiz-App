// Function to save the theme preference to local storage
function saveThemePreference(isDarkMode) {
	localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to load the theme preference from local storage
function loadThemePreference() {
	const theme = localStorage.getItem('theme');
	return theme === 'dark';
}

// Function to set the initial theme based on local storage
function setInitialTheme() {
	const isDarkMode = loadThemePreference();
	if (isDarkMode) {
		document.body.classList.add('dark-mode');
	}
}

// Apply the initial theme on page load
setInitialTheme();
