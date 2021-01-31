inputDefault = document.getElementsByClassName('inputDefault');
    console.log(inputDefault);
    //первое поле


function focusInput(el) {
	console.log(el);
	el.parentElement.classList.add('focusInput');
	let closeIcon = el.parentElement.querySelector('.fa-times');
	el.addEventListener('blur',() => {
	 		el.parentElement.classList.remove('focusInput');
		});

	if (el.className == 'inputDefault') {
		el.parentElement.classList.add('focusInput');
	}

	else if (el.className == 'inputLabel') {
		el.parentElement.classList.add('labelResize');

		el.addEventListener('blur',() => {
	 		if (el.value == 0)  {
	 			el.parentElement.classList.remove('labelResize');
	 			el.parentElement.classList.remove('errorInput');
	 			closeIcon.style.display = 'none';
	 		}
	 		else {
	 			
	 		}
	 		if (el.value.length >= 2) {
	 			el.parentElement.classList.remove('errorInput');
	 			closeIcon.style.display = 'none';
	 		}
	 		else if (el.value.length > 0 && el.value.length <= 1) {
	 			el.parentElement.classList.add('errorInput');
	 			console.log(el.parentElement.closeIcon);
	 			closeIcon.style.display = 'block';
	 			el.parentElement.classList.add('focusInput');

	 		}

		});
	}
	
}