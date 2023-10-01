const toggleModeInput = document.getElementById('toggleMode');
const body = document.body;

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
		body.classList.add('dark-mode');
		toggleModeInput.checked = true;
	}
}

// Toggle mode input change event
toggleModeInput.addEventListener('change', () => {
	const isDarkMode = toggleModeInput.checked;
	body.classList.toggle('dark-mode', isDarkMode);
	saveThemePreference(isDarkMode);
	// Add a class for transition only when the toggle switch changes
	body.classList.add('transition-active');
	setTimeout(() => {
		body.classList.remove('transition-active');
	}, 10);
});

// Set the initial theme
setInitialTheme();
