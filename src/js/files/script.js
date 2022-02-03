// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

function video() {
	const videoContainer = document.querySelector('.video');
	const videoControls = document.querySelector('.video__play');
	const video = document.querySelector('.video__video');
	const videoPause = document.querySelector('.video__over');
	if (video) {
		videoControls.addEventListener('click', function () {
			if (video.paused) {
				video.play();
				videoContainer.classList.add('video-is-playing');
			} else {
				video.pause();
				videoContainer.classList.remove('video-is-playing');
				video.load();
			}
		});
		videoPause.addEventListener('click', function () {
			if (video.played) {
				video.pause();
				videoContainer.classList.remove('video-is-playing');
				video.load();
			}
		});
	}
	
}
video();


const header = document.querySelector("header.header");
let body, secondBody = document.body;
function scrollHeader() {
	0 == body && secondBody.classList.contains("_scroll-up") && secondBody.classList.remove("_scroll-up")
}
body = window.scrollY,
	window.addEventListener("scroll", (function (e) {
		let windowScroll = window.scrollY;
		windowScroll > body ? (secondBody.classList.remove("_scroll-up"),
			secondBody.classList.add("_scroll-down")) : windowScroll < body && (secondBody.classList.remove("_scroll-down"),
				secondBody.classList.add("_scroll-up")),
			body = windowScroll;
	}
	)),
	scrollHeader();