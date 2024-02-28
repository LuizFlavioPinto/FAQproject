function changeVisibility (button) {
	let divText = button.parentNode.querySelector('p')

	divText.style.display == 'flex' ? divText.style.display = 'none': divText.style.display = 'flex'
}