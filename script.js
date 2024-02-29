function changeVisibility (clickedElement) {
	let divText = clickedElement.parentNode.querySelector('p')

	/* There's going to be some times that the user is going to click on the h2, and the
		parentNode is not going to find the button, bacause the button is out of the texts div.
		So, it's necessary to find the parentNode of the parentNode
	*/
	let button = clickedElement.parentNode.querySelector('button')
	if (button == null) button = clickedElement.parentNode.parentNode.querySelector('button')

	let questionsContainer = document.querySelector('.questionsContainer')
	let questionButtons = questionsContainer.querySelectorAll('button')
	let questionPs = questionsContainer.querySelectorAll('p')
	let activeButton 
	let activeP 

	for (let i = 0; i < questionButtons.length; i++){
		if (questionButtons[i].style.backgroundColor == 'black'){
			activeButton = questionButtons[i]
			activeP = questionPs[i]
		}
	}


	if(divText.style.display == 'flex') {
		divText.style.display = 'none'
		button.style.backgroundColor = "hsl(290, 100%, 50%)"
		button.textContent = '+'

	} else if (divText.style.display == 'none' || divText.style.display == '') {
		divText.style.display = 'flex'
		button.style.backgroundColor = 'black'
		button.textContent = '-'
		if(activeButton){
			activeButton.style.backgroundColor = "hsl(290, 100%, 50%)"
			activeButton.textContent = "+"
			activeP.style.display = 'none'
		}
	}

}