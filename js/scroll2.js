const slider = document.querySelectorAll(".scroll li")

let current = 0

function switchSlider() {
	slider.forEach((slide, index) => {
		slide.classList.remove(
			"first",
			"second",
			"third",
			"fourth",
			"fifth",
			"un-active"
		)
		if (index === current) {
			slide.classList.add("third")
		} else if (index === (current + 1) % slider.length) {
			slide.classList.add("fourth")
		} else if (index === (current + 2) % slider.length) {
			slide.classList.add("fifth")
		} else if (index === (current - 1 + slider.length) % slider.length) {
			slide.classList.add("second")
		} else if (index === (current - 2 + slider.length) % slider.length) {
			slide.classList.add("first")
		} else {
			slide.classList.add("un-active")
		}
	})
	current = (current + 1) % slider.length
}
setInterval(switchSlider, 1000)
