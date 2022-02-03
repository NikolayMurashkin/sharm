/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Pagination, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.masters__slider')) {
		new Swiper('.masters__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination],

			// effect: 'fade',
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.slider-quality-pagging',
				clickable: true,
				type: 'fraction',
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			on: {

			}
		});

	}
	if (document.querySelector('.reviews__slider')) {
		new Swiper('.reviews__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination, EffectFade],
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.slider-quality-pagging-reviews',
				clickable: true,
				type: 'fraction',
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-button-next-reviews ',
				prevEl: '.swiper-button-prev-reviews ',
			},

			breakpoints: {
				// 320: {
				// 	slidesPerView: 1.3,
				// 	spaceBetween: 10,
				// 	autoHeight: true,
				// },
				// 480: {
				// 	slidesPerView: 2,
				// 	spaceBetween: 10,
				// },
				// 768: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 992: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 20,
				// },
				// 1268: {
				// 	slidesPerView: 3,
				// 	spaceBetween: 30,
				// },
			},

			on: {

			}
		});
	}
	if (document.querySelector('.courses__slider')) {
		new Swiper('.courses__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination],

			// effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: true,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.slider-quality-pagging',
				clickable: true,
				type: 'fraction',
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 1.5,
					spaceBetween: 15,
				},
				550: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1268: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},

			on: {

			}
		});

	}
	if (document.querySelector('.gallery__slider')) {
		new Swiper('.gallery__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Autoplay, Pagination],

			// effect: 'fade',
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoHeight: false,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			// Dotts
			pagination: {
				el: '.slider-quality-pagging-gallery',
				clickable: true,
				type: 'fraction',
			},
			// Arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			breakpoints: {
				320: {
					slidesPerView: 1.3,
					spaceBetween: 10,
					autoHeight: true,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},

			on: {

			}
		});

	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});